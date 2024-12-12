import { EMPLOYEE_INIT_TYPE, EMPLOYEE_ENUMS, EMPLOYEE_ACTION } from "../constants/employee.constant"

const EMPLOYEE_LIST_INIT: EMPLOYEE_INIT_TYPE = {
    loading: false,
    message: null,
    employees: []
}

export const GetEmployeeListReducer = (state = EMPLOYEE_LIST_INIT, action: EMPLOYEE_ACTION): EMPLOYEE_INIT_TYPE => {
    switch (action.type) {
        case EMPLOYEE_ENUMS.EMPLOYEE_LIST_REQUEST:
            if (state.employees && state.employees?.length > 0) {
                return state
            } else {
                return { ...state, loading: true }
            }
        case EMPLOYEE_ENUMS.EMPLOYEE_LIST_SUCCESS:
            return { loading: false, message: action.payload.message, employees: action.payload.employees }
        case EMPLOYEE_ENUMS.EMPLOYEE_LIST_FAILURE:
            return { loading: false, message: action.payload.message, error: action.payload.error }
        default:
            return state;
    }
}

const EMPLOYEE_INIT: EMPLOYEE_INIT_TYPE = {
    loading: false,
    message: null,
}

export const GetEmployeeReducer = (state = EMPLOYEE_INIT, action: EMPLOYEE_ACTION): EMPLOYEE_INIT_TYPE => {
    switch (action.type) {
        case EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_REQUEST:
            return { loading: true }
        case EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_SUCCESS:
            return { loading: false, message: action.payload.message, employee: action.payload.employee }
        case EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_FAILURE:
            return { loading: false, message: action.payload.message, error: action.payload.error }
        default:
            return state;
    }
}