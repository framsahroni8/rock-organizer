import * as R from 'ramda'
import { RxGraphQLReplicationPullQueryBuilder } from 'rxdb'
import { RxGraphQLReplicationPullStreamQueryBuilder } from 'rxdb/dist/types/types'

interface CheckPointInterface {
  updated_at: string
}

export interface CollectionConfig {
  [key: string]: {
    pushQueryBuilder: (rows: any) => { query: string; variables: { [key: string]: any } }
    pullQueryBuilder: RxGraphQLReplicationPullQueryBuilder<CheckPointInterface>
    streamQueryBuilder: RxGraphQLReplicationPullStreamQueryBuilder
  }
}

export const pushQueryBuilderAssets = (rows: any) => {
  const variables = {
    asset: R.map((x) => {
      //return x.newDocumentState
      const tempData = x.newDocumentState

      if (tempData._deleted === true) {
        tempData.deleted_at = tempData.updated_at
      }
      delete tempData._deleted
      return tempData
    }, rows),
  }

  const query = `
          mutation InsertAsset($asset: [assets_insert_input!]!) {
            insert_assets(
              objects: $asset,
              on_conflict: {
                constraint: assets_pkey,
                update_columns: [name, deleted_at, updated_at]
              }
            ){
              returning {
                id,
                name,
                code,
                type,
                created_at,
                deleted_at,
                updated_at
              }
            }
         }
      `

  return {
    query,
    variables,
  }
}

export const pullQueryBuilderAssets: RxGraphQLReplicationPullQueryBuilder<CheckPointInterface> = (
  checkpoint,
  limit
) => {
  if (!checkpoint) {
    checkpoint = {
      updated_at: '2000-03-24T07:28:49.655095+00:00',
    }
  }
  const updatedCheckPoint = checkpoint.updated_at
  console.log('checkpoint from pull query build', checkpoint)
  const query = `query GetAssets($limit: Int!, $updatedCheckPoint: timestamptz!) {
      assets(where: {updated_at: {_gt: $updatedCheckPoint}}, limit: $limit) {
        id,
        name,
        code,
        type,
        created_at,
        deleted_at,
        updated_at
      }
    }`
  return {
    query,
    variables: {
      updatedCheckPoint,
      limit,
    },
  }
}

export const streamQueryBuilderAssets = (headers: any) => {
  const limit = 50
  const tempTime = new Date()
  tempTime.setHours(tempTime.getHours())
  const cursorId = tempTime.toISOString()
  const query = `subscription GetAssetsStreamingSubscription($limit: Int!, $cursorId: timestamptz!) {
      assets_stream(batch_size: $limit , cursor: { initial_value: { updated_at: $cursorId } }) {
        id,
        name,
        code,
        type,
        updated_at,
        deleted_at,
        updated_at
      }
    }`

  return {
    query,
    variables: {
      limit,
      cursorId,
    },
  }
}

export const pushQueryBuilderComponents = (rows: any) => {

  const query = `
            mutation InsertAsset($asset: [assets_insert_input!]!) {
              insert_assets(
                objects: $asset,
                on_conflict: {
                  constraint: assets_pkey,
                  update_columns: [name, deleted_at, updated_at]
                }
              ){
                returning {
                  id,
                  name,
                  type,
                  created_at,
                  deleted_at,
                  updated_at
                }
              }
           }
        `

  const variables = {
    asset: R.map((x) => {
      const tempData = x.newDocumentState

      if (tempData._deleted === true) {
        tempData.deleted_at = tempData.updated_at
      }
      delete tempData._deleted
      return tempData
    }, rows),
  }

  return {
    query,
    variables,
  }
}

export const pullQueryBuilderComponents: RxGraphQLReplicationPullQueryBuilder<
  CheckPointInterface
> = (checkpoint, limit) => {
  if (!checkpoint) {
    checkpoint = {
      updated_at: '2000-03-24T07:28:49.655095+00:00',
    }
  }
  const updatedCheckPoint = checkpoint.updated_at
  console.log('checkpoint from pull query build', checkpoint)
  const query = `query GetComponents($limit: Int!, $updatedCheckPoint: timestamptz!) {
    components(where: {updated_at: {_gt: $updatedCheckPoint}}, limit: $limit) {
            id,
            loc_id,
            ref_id,
            name,
            type,
            maker,
            model,
            serial_number,
            class_reference,
            criticality,
            unit_id,
            quantity,
            level,
            created_at,
            updated_at,
            deleted_at
        }
    }`
  return {
    query,
    variables: {
      updatedCheckPoint,
      limit,
    },
  }
}

export const streamQueryBuilderComponents = (headers: any) => {
  const limit = 50
  const tempTime = new Date()
  tempTime.setHours(tempTime.getHours())
  const cursorId = tempTime.toISOString()
  const query = `subscription GetComponentsStreamingSubscription($limit: Int!, $cursorId: timestamptz!) {
    components_stream(batch_size: $limit , cursor: { initial_value: { updated_at: $cursorId } }) {
            id,
            loc_id,
            ref_id,
            name,
            type,
            maker,
            model,
            serial_number,
            class_reference,
            criticality,
            unit_id,
            quantity,
            level,
            created_at,
            updated_at,
            deleted_at
        }
    }`

  return {
    query,
    variables: {
      limit,
      cursorId,
    },
  }
}

export const pushQueryBuilderRequisitions = (rows: any) => {

  const variables = {
    requisition: R.map((x) => {
      //return x.newDocumentState
      const tempData = x.newDocumentState

      if (tempData._deleted === true) {
        tempData.deleted_at = tempData.updated_at
      }
      delete tempData._deleted
      return tempData
    }, rows),
  }

  const query = `
          mutation InsertRequisitionDocs($requisition: [requisition_docs_insert_input!]!) {
            insert_requisition_docs(
              objects: $requisition,
              on_conflict: {
                constraint: requisition_docs_pkey,
                update_columns: [deleted_at, updated_at]
              }
            ){
              returning {
                code_reference
                description
                document_number
                ms_ts_remarks
                requisition_number
                tm_remarks
                account_code
                asset_id
                created_by
                id
                revision_requested_by
                created_at
                date_acct
                deleted_at
                updated_at
                department
                ms_ts_approval
                status
                tm_approval
                type
              }
            }
         }
      `

  return {
    query,
    variables,
  }
}

export const pullQueryBuilderRequisitions: RxGraphQLReplicationPullQueryBuilder<
  CheckPointInterface
> = (checkpoint, limit) => {
  if (!checkpoint) {
    checkpoint = {
      updated_at: '2000-03-24T07:28:49.655095+00:00',
    }
  }
  const updatedCheckPoint = checkpoint.updated_at
  console.log('checkpoint from pull query build', checkpoint)
  const query = `query GetRequisitionDocs($limit: Int!, $updatedCheckPoint: timestamptz!) {
    requisition_docs(where: {updated_at: {_gt: $updatedCheckPoint}}, limit: $limit) {
      code_reference,
      description,
      document_number,
      ms_ts_remarks,
      requisition_number,
      tm_remarks,
      asset_id,
      created_by,
      id,
      revision_requested_by,
      created_at,
      date_acct,
      deleted_at,
      updated_at,
      department,
      ms_ts_approval,
      status,
      tm_approval,
      type,
      req_assets{
        code,
        name,
      },
      account_code_detail{
        name,
        ref_id,
      },
      docs_to_comp {
        id,
        requisition_id,
        component_id,
        quantity,
        remarks,
        updated_at,
        created_at,
        deleted_at,
        req_comp_to_comp {
          name,
          ref_id,
          updated_at,
          unit_id,
          type,
          serial_number,
          quantity,
          model,
          maker,
          loc_id,
          level,
          id,
          deleted_at,
          criticality,
          created_at,
          class_reference
        }
      }
    }
  }`
  return {
    query,
    variables: {
      updatedCheckPoint,
      limit,
    },
  }
}

export const streamQueryBuilderRequisitions = (headers: any) => {
  const limit = 50
  const tempTime = new Date()
  tempTime.setHours(tempTime.getHours())
  const cursorId = tempTime.toISOString()
  const query = `subscription GetRequisitionDocsStreamingSubscription($limit: Int!, $cursorId: timestamptz!) {
    requisition_docs_stream(batch_size: $limit , cursor: { initial_value: { updated_at: $cursorId } }) {
      code_reference,
      description,
      document_number,
      ms_ts_remarks,
      requisition_number,
      tm_remarks,
      asset_id,
      created_by,
      id,
      revision_requested_by,
      created_at,
      date_acct,
      deleted_at,
      updated_at,
      department,
      ms_ts_approval,
      status,
      tm_approval,
      type,
      req_assets{
        code,
        name,
      },
      account_code_detail{
        name,
        ref_id,
      },
      docs_to_comp {
        id,
        requisition_id,
        component_id,
        quantity,
        remarks,
        updated_at,
        created_at,
        deleted_at,
        req_comp_to_comp {
          name,
          ref_id,
          updated_at,
          unit_id,
          type,
          serial_number,
          quantity,
          model,
          maker,
          loc_id,
          level,
          id,
          deleted_at,
          criticality,
          created_at,
          class_reference
        }
      }
    }
  }`

  return {
    query,
    variables: {
      limit,
      cursorId,
    },
  }
}
