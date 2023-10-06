import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import workflowReducer from './redux/slices/workflows/workflows.slice'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const getDefaultMiddleware = (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: false,
})

export const store = configureStore({
    reducer: {
      workflow: workflowReducer,
      middleware: [composedEnhancer, getDefaultMiddleware]
    }
  })