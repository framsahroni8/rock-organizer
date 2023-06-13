// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './slice/login.slice';
import { requisitionReducer } from './slice/requisition.slice';
import { addRequisitionReducer } from './slice/addRequisition.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  requisitionArray: requisitionReducer,
  addRequisition: addRequisitionReducer
});

export default rootReducer;
