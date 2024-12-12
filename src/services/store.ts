import { composeWithDevTools } from "@redux-devtools/extension"
import { combineReducers, legacy_createStore as createStore, applyMiddleware, Middleware, compose } from "redux"
import { thunk } from "redux-thunk"
import { GetEmployeeListReducer, GetEmployeeReducer } from "./reducers/employee.reducer"
import { EMPLOYEE_ACTION } from "./constants/employee.constant"

const middleware: Middleware[] = [thunk]

const appReducer = combineReducers({
    employees: GetEmployeeListReducer,
    employee: GetEmployeeReducer
})

type APP_ACTION = EMPLOYEE_ACTION

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: APP_ACTION) => {
    return appReducer(state, action)
}

let composeEnhancers = compose

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store