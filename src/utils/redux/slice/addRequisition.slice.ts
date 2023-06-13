import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Asset } from '../../../interfaces/Asset.interfaces'
import { Component, SubComponent } from '../../../interfaces/Component.interface'
import { Requisition } from '../../../interfaces/Requisition.interfaces'

export interface AddRequisition {
  requisition_type: string
  account_code: Component
  requisition_desc: string
  work_desc: string
  vessel: Asset
  department: string
  requisition_number: string
  requisition_date: Date
  sub_component: SubComponent[]
}

const initialState: AddRequisition = {
  requisition_type: '',
  requisition_desc: '',
  work_desc: '',
  department: '',
  requisition_number: '',
  account_code: {
    id: '',
    account_code: '',
    name: '',
    sub_components: [],
  },
  vessel: {
    id: '',
    code: '',
    name: '',
    type: '',
    asset_ref_id: 0,
  },
  requisition_date: new Date(),
  sub_component: [],
}

export const addRequisitionSlice = createSlice({
  name: 'addRequisitionArray',
  initialState,
  reducers: {
    setRequisitionInput: (state, action: PayloadAction<Requisition>) => {
      state.requisition_type = action.payload.type
      state.requisition_desc = action.payload.description
      state.work_desc = action.payload.work_description
      state.department = action.payload.department
      state.requisition_number = action.payload.requisition_number
      state.account_code = action.payload.component
      state.vessel = action.payload.asset
      state.requisition_date = new Date(action.payload.date_acct)
      state.sub_component = action.payload.sub_components
    },
    changeReqType: (state, action: PayloadAction<string>) => {
      state.requisition_type = action.payload
    },
    changeReqDesc: (state, action: PayloadAction<string>) => {
      state.requisition_desc = action.payload
    },
    changeWorkDesc: (state, action: PayloadAction<string>) => {
      state.work_desc = action.payload
    },
    changeDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload
    },
    changeReqNumber: (state, action: PayloadAction<string>) => {
      state.requisition_number = action.payload
    },
    changeAccCode: (state, action: PayloadAction<Component>) => {
      state.account_code = action.payload
    },
    changeVessel: (state, action: PayloadAction<Asset>) => {
      state.vessel = action.payload
    },
    changeReqDate: (state, action: PayloadAction<Date>) => {
      state.requisition_date = action.payload
    },
    changeSubComp: (state, action: PayloadAction<SubComponent[]>) => {
      state.sub_component = action.payload
    },
    resetData: (state) => {
      ;(state.requisition_type = ''),
        (state.requisition_desc = ''),
        (state.work_desc = ''),
        (state.department = ''),
        (state.requisition_number = ''),
        (state.account_code = {
          id: '',
          account_code: '',
          name: '',
          sub_components: [],
        }),
        (state.vessel = {
          id: '',
          code: '',
          name: '',
          type: '',
          asset_ref_id: 0,
        }),
        (state.requisition_date = new Date()),
        (state.sub_component = [])
    },
    resetAccCode: (state) => {
      state.account_code = {
        id: '',
        account_code: '',
        name: '',
        sub_components: [],
      }
    },
    resetVessel: (state) => {
      state.vessel = {
        id: '',
        code: '',
        name: '',
        type: '',
        asset_ref_id: 0,
      }
    },
  },
})

export const {
  setRequisitionInput,
  changeReqType,
  changeReqDesc,
  changeWorkDesc,
  changeDepartment,
  changeReqNumber,
  changeAccCode,
  changeVessel,
  changeReqDate,
  changeSubComp,
  resetData,
  resetAccCode,
  resetVessel,
} = addRequisitionSlice.actions
export const addRequisitionReducer = addRequisitionSlice.reducer
