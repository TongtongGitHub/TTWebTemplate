import { createStore,applyMiddleware  } from 'redux' // 引入
import reducer from './reducer'
import thunk from 'redux-thunk'

// const actions = {
//   increase: () => ({type: 'INCREASE'}),
//   decrease: () => ({type: 'DECREASE'})
// }

const store = createStore(reducer,applyMiddleware(thunk));

store.subscribe(() =>
  console.log(store.getState())
);

// store.dispatch(actions.increase()) // {count: 1}
// store.dispatch(actions.increase()) // {count: 2}
// store.dispatch(actions.increase()) // {count: 3}

export default store;