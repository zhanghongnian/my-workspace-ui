import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const defaultCommonState = {
  processTplSelectData: [],
  hostSelectData: [],
  hostGroupSelectData: [],
  hostGroupHostRelationData: [],
  timestamp: new Date().getTime(),
}

const common = (state = defaultCommonState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  common,
  router: routerReducer
});
