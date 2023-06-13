export const assetSchema = {
  version: 0,
  primaryKey: 'code',
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
      maxLength: 100,
    },
    code: {
      type: 'string',
      primary: true,
      maxLength: 100,
    },
    type: {
      type: 'string',
      maxLength: 100,
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      maxLength: 100,
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      maxLength: 100,
    },
    deleted_at: {
      type: ['string', 'null'],
      format: 'date-time',
      maxLength: 100,
    },
  },
  indexes: ['updated_at'],
  required: ['name', 'code', 'type', 'updated_at'],
  additionalPropeties: true,
}
