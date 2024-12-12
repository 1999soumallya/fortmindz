import { Dispatch } from "redux";
import axios from "@/config/axios";
import { AxiosResponse } from "axios";
import { GET_ALL_EMPLOYEE, GET_EMPLOYEE_DETAILS } from "@/utils/api.url";
import { EMPLOYEE_ACTION, EMPLOYEE_ENUMS } from "../constants/employee.constant";

export const GetEmployeeList = (dispatch: Dispatch<EMPLOYEE_ACTION>) => {
    dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_REQUEST });
    axios.get(GET_ALL_EMPLOYEE).then((response: AxiosResponse) => {
        if (response.data.isSuccess) {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_SUCCESS, payload: { message: response.data.message, employees: response.data.data } });
        } else {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_FAILURE, payload: { message: response.data.message, error: response.data } });
        }
    }).catch((error) => {
        if (error.response) {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_FAILURE, payload: { message: error.response.data.message, error: error?.response?.data?.errors || error.response.data } });
        }
    })
}

export const GetEmployeeDetails = (data: string, dispatch: Dispatch<EMPLOYEE_ACTION>) => {
    dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_REQUEST });
    axios.get(GET_EMPLOYEE_DETAILS(data)).then((response: AxiosResponse) => {
        if (response.data.isSuccess) {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_SUCCESS, payload: { message: response.data.message, employee: response.data.data } });
        } else {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_FAILURE, payload: { message: response.data.message, error: response.data } });
        }
    }).catch((error) => {
        if (error.response) {
            dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_FAILURE, payload: { message: error.response.data.message, error: error?.response?.data?.errors || error.response.data } });
        }
    })
}