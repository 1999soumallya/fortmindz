import { EMPLOYEE_OBJECT } from "@/types/employee.types";

export enum EMPLOYEE_ENUMS {
    EMPLOYEE_LIST_REQUEST = "EMPLOYEE_LIST_REQUEST",
    EMPLOYEE_LIST_SUCCESS = "EMPLOYEE_LIST_SUCCESS",
    EMPLOYEE_LIST_FAILURE = "EMPLOYEE_LIST_FAILURE",
    EMPLOYEE_DETAILS_REQUEST = "EMPLOYEE_DETAILS_REQUEST",
    EMPLOYEE_DETAILS_SUCCESS = "EMPLOYEE_DETAILS_SUCCESS",
    EMPLOYEE_DETAILS_FAILURE = "EMPLOYEE_DETAILS_FAILURE",
}

export interface EMPLOYEE_LIST_REQUEST {
    type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_REQUEST
}

export interface EMPLOYEE_LIST_SUCCESS {
    type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_SUCCESS
    payload: {
        message: string | null;
        employees: EMPLOYEE_OBJECT[];
    }
}

export interface EMPLOYEE_LIST_FAILURE {
    type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_FAILURE
    payload: {
        message: string | null;
        error: string | null
    }
}

export interface EMPLOYEE_DETAILS_REQUEST {
    type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_REQUEST
}

export interface EMPLOYEE_DETAILS_SUCCESS {
    type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_SUCCESS
    payload: {
        message: string | null;
        employee: EMPLOYEE_OBJECT;
    }
}

export interface EMPLOYEE_DETAILS_FAILURE {
    type: EMPLOYEE_ENUMS.EMPLOYEE_DETAILS_FAILURE
    payload: {
        message: string | null;
        error: string | null
    }
}

export type EMPLOYEE_ACTION = EMPLOYEE_LIST_REQUEST | EMPLOYEE_LIST_SUCCESS | EMPLOYEE_LIST_FAILURE | EMPLOYEE_DETAILS_REQUEST | EMPLOYEE_DETAILS_SUCCESS | EMPLOYEE_DETAILS_FAILURE

export interface EMPLOYEE_INIT_TYPE {
    loading: boolean;
    error?: string | null | object | Array<object>;
    message?: string | null
    employees?: EMPLOYEE_OBJECT[];
    employee?: EMPLOYEE_OBJECT;
}