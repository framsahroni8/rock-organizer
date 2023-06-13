export const componentSchema = {
  version: 0,
  primaryKey: 'ref_id',
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    loc_id: {
      type: 'string',
      maxLength: 100,
    },
    ref_id: {
      type: 'string',
      primary: true,
      maxLength: 100,
    },
    name: {
      type: 'string',
      maxLength: 100,
    },
    type: {
      type: 'string',
      maxLength: 100,
    },
    maker: {
      type: 'string',
      maxLength: 100,
    },
    model: {
      type: 'string',
      maxLength: 100,
    },
    serial_number: {
      type: 'string',
      maxLength: 100,
    },
    class_reference: {
      type: 'string',
      maxLength: 100,
    },
    criticality: {
      type: 'string',
      maxLength: 100,
    },
    unit_id: {
      type: 'string',
      maxLength: 100,
    },
    quantity: {
      type: 'integer',
    },
    level: {
      type: 'integer',
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
    // sub_component: {
    //     type: 'array',
    //     ref: 'componentSchema',
    //     items: {
    //       type: 'string',
    //     },
    //   },
  },
  required: ['ref_id', 'name', 'type', 'quantity', 'level', 'updated_at', 'created_at'],
  additionalPropeties: true,
}
