import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import questionsReducer from './reducers/questionsReducer'
import notificationReducer from './reducers/notificationReducer'
//import loggedUserReducer from './src/reducers/loggedUserReducer'
//import userlistReducer from './src/reducers/userlistReducer'

const reducer = combineReducers({
  questions: questionsReducer,
  notification: notificationReducer
})
/*
const reducer = combineReducers({
  blogs: blogReducer,
  loggedUser: loggedUserReducer,
  notification: notificationReducer,
  users: userlistReducer
})
*/

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store