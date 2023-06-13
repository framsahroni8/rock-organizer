export const requisitionSchema = {
  version: 0,
  primaryKey: 'requisition_number',
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    created_by: {
      type: 'string',
      maxLength: 100,
    },
    revision_requested_by: {
      type: 'string',
      maxLength: 100,
    },
    department: {
      type: 'string',
      maxLength: 100,
    },
    type: {
      type: 'string',
      maxLength: 100,
    },
    asset_id: {
      type: 'number',
    },
    req_assets: {
      ref: 'assetSchema',
      type: 'string',
    },
    requisition_number: {
      type: 'string',
      primary: true,
      maxLength: 100,
    },
    code_reference: {
      type: 'string',
      maxLength: 100,
    },
    description: {
      type: 'string',
      maxLength: 100,
    },
    ms_ts_remarks: {
      type: 'string',
      maxLength: 100,
    },
    tm_remarks: {
      type: 'string',
      maxLength: 100,
    },
    ms_ts_approval: {
      type: 'string',
      maxLength: 100,
    },
    tm_approval: {
      type: 'string',
      maxLength: 100,
    },
    status: {
      type: 'string',
      maxLength: 100,
    },
    document_number: {
      type: 'string',
      maxLength: 100,
    },
    date_acct: {
      type: 'string',
      format: 'date-time',
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
      type: 'string',
      format: 'date-time',
      maxLength: 100,
    },
    account_code: {
      type: 'number',
    },
    account_code_detail: {
      ref: 'componentSchema',
      type: 'string',
      maxLength: 100,
    },
    req_comp_to_comp: {
      ref: 'componentSchema',
      type: 'string',
      maxLength: 100,
    },
  },
  indexes: ['updated_at'],
  required: [
    'department',
    'type',
    'asset',
    'requisition_number',
    'description',
    'ms_ts_remarks',
    'tm_remarks',
    'ms_ts_approval',
    'tm_approval',
    'status',
    'updated_at',
    'created_at',
    'created_by',
  ],
}
