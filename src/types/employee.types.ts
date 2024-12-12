export interface EMPLOYEE_OBJECT {
    image: string
    age: number
    salary: number
    _id: string
    fullName: string
    email: string
    phone: string
    createdAt: string
    updatedAt: string
}

export interface EMPLOYEE_LIST {
    data: EMPLOYEE_OBJECT[];
    total: number;
}

export interface EMPLOYEE_ADD {
    fullName?: string
    email?: string
    phone?: number
    image?: string
    age?: number
    salary?: number
}

export interface EMPLOYEE_UPDATE {
    fullName?: string
    email?: string
    phone?: number
    image?: string
    age?: number
    salary?: number
}