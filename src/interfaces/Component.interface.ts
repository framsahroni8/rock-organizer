export interface Component {
  id: string
  account_code: string
  name: string
  sub_components: SubComponent[]
}

export interface SubComponent {
  class_reference: string
  criticality: string
  id: string
  impa_code: string
  level: string
  loc_id: string
  maker: string
  model: string
  parent_id: string
  stock: string
  ref_id: string
  serial_number: string
  type: string
  unit_id: string
  status?: boolean
  quantity?: number
  remarks?: string
  name: string
  sub_components: SubComponent[]
}
