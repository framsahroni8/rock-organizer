import { Asset } from './Asset.interfaces'
import { Component, SubComponent } from './Component.interface'

export interface Requisition {
  asset: Asset
  asset_id: string
  code_reference: string
  component: Component
  component_id: string
  created_by: string
  date_acct: Date
  department: string
  description: string
  document_number: string
  files: []
  id: string
  ms_ts_approval: string
  ms_ts_remarks: string
  requisition_number: string
  revision_requested_by: string
  status: string
  sub_components: SubComponent[]
  tm_approval: string
  tm_remarks: string
  type: string
  work_description: string
}
