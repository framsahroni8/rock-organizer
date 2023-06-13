import { addRxPlugin, createRxDatabase, removeRxDatabase, RxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { assetSchema } from './asset.schema'
import { componentSchema } from './component.schema'
import { requisitionSchema } from './requisition.schema'
import { replicateGraphQL } from 'rxdb/plugins/replication-graphql'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election'
import {
  pushQueryBuilderAssets,
  pullQueryBuilderAssets,
  streamQueryBuilderAssets,
  CollectionConfig,
  pullQueryBuilderComponents,
  pushQueryBuilderComponents,
  streamQueryBuilderComponents,
  pullQueryBuilderRequisitions,
  pushQueryBuilderRequisitions,
  streamQueryBuilderRequisitions,
} from './queryBuilder'
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump'
addRxPlugin(RxDBDevModePlugin)
addRxPlugin(RxDBLeaderElectionPlugin)
addRxPlugin(RxDBJsonDumpPlugin)

const batchSize = 50
const syncUrls = {
  http: 'https://levia-dev.concise.co.id/hasura/v1/graphql',
  ws: 'wss://levia-dev.concise.co.id/hasura/v1/graphql',
}
const HASURA_SECRET = 'go2levia'
let dbPromise: any = null

const queryBuilders: CollectionConfig = {
  assets: {
    pushQueryBuilder: pushQueryBuilderAssets,
    pullQueryBuilder: pullQueryBuilderAssets,
    streamQueryBuilder: streamQueryBuilderAssets,
  },
  components: {
    pushQueryBuilder: pushQueryBuilderComponents,
    pullQueryBuilder: pullQueryBuilderComponents,
    streamQueryBuilder: streamQueryBuilderComponents,
  },
  requisitions: {
    pushQueryBuilder: pushQueryBuilderRequisitions,
    pullQueryBuilder: pullQueryBuilderRequisitions,
    streamQueryBuilder: streamQueryBuilderRequisitions,
  },
}

const _create = async () => {
  console.log('DatabaseService: creating database..')
  const db = await createRxDatabase({
    name: 'appdb',
    storage: getRxStorageDexie(),
  })
  console.log('DatabaseService: created database')

  // show leadership in title
  db.waitForLeadership().then(() => {
    console.log('isLeader now')
    document.title = '♛ ' + document.title
  })

  // create collections
  console.log('DatabaseService: create collections')
  await db.addCollections({
    assets: {
      schema: assetSchema,
    },
    components: {
      schema: componentSchema,
    },
    requisitions: {
      schema: requisitionSchema,
    },
  })

  Object.values(db.collections)
    .map((col) => col.name)
    .map((colName) => {
      const { pushQueryBuilder, pullQueryBuilder, streamQueryBuilder } = queryBuilders[colName]
      const replicationState = replicateGraphQL({
        collection: db[colName],
        url: syncUrls,
        headers: {
          //Authorization: 'Bearer ' + JWT_BEARER_TOKEN
          'x-hasura-admin-secret': HASURA_SECRET
        },
        push: {
          batchSize,
          queryBuilder: pushQueryBuilder,
          responseModifier: async function (plainResponse: any) {
            const docs = plainResponse
            return docs.returning
          },
        },
        pull: {
          batchSize,
          queryBuilder: pullQueryBuilder,
          streamQueryBuilder: streamQueryBuilder,
          dataPath: undefined,
          includeWsHeaders: true,
          responseModifier: async function (plainResponse: any, origin: any, requestCheckpoint: any) {
            const docs = plainResponse
            return {
              documents: docs,
              checkpoint:
                docs.length === 0
                  ? requestCheckpoint
                  : {
                      updated_at: docs[docs.length - 1].updated_at,
                    },
            }
          },
        },
        live: true,
        // deletedField: 'deleted',
      })

      replicationState.error$.subscribe((err) => {
        console.log('Got replication error:')
        console.dir(err)
      })
    })

  return db
}

export const get = () => {
  if (!dbPromise) dbPromise = _create()
  return dbPromise
}

export const removeDB = () => {
  dbPromise ? removeRxDatabase('appdb', getRxStorageDexie()) : ''
}

export const exportDB = async () => {
  const exportedDB: RxDatabase = await dbPromise
  exportedDB.exportJSON().then((json: any) => console.log(json))
}
