import axios from '@/config/axios'
import TitleContainer from '@/containers/TitleContainer'
import { GetEmployeeList } from '@/services/actions/employee.action'
import { EMPLOYEE_ENUMS } from '@/services/constants/employee.constant'
import { useAppDispatch, useAppSelector } from '@/services/hook'
import { EMPLOYEE_OBJECT } from '@/types/employee.types'
import { DELETE_EMPLOYEE } from '@/utils/api.url'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import React, { useMemo } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const TopSideButtons = () => {
    const navigate = useNavigate()

    const openAddNewLeadModal = () => {
        navigate('/add-employee')
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New Employee</button>
        </div>
    )
}


const EmployeePage: React.FunctionComponent = () => {

    const { employees, message } = useAppSelector(state => state.employees)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useMemo(() => GetEmployeeList(dispatch), [dispatch])

    const updateEmployee = (details: EMPLOYEE_OBJECT) => {
        navigate(`/update-employee/${details._id}`)
    }

    const deleteEmployee = (id: string, name: string) => {
        Swal.fire({
            title: "Are you sure?",
            html: `<p>You want to delete <b>${name}</b> employee details!</p>`,
            icon: "warning",
            showCancelButton: true,
            customClass: {
                popup: 'modal-box',
                confirmButton: '!btn !btn-primary !px-6',
                cancelButton: '!btn !btn-ghost',
            },
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(DELETE_EMPLOYEE(id)).then((response) => {
                    if (response.data.isSuccess) {
                        toast.success(response.data.message)
                        dispatch({ type: EMPLOYEE_ENUMS.EMPLOYEE_LIST_SUCCESS, payload: { message: message || '', employees: employees?.filter((element) => element._id != id) || [] } })
                    } else {
                        toast.error(response.data.message)
                    }
                }).catch((error) => {
                    if (error.response) {
                        toast.error(error.response.data.message)
                    }
                })
            }
        });
    }

    return (
        <TitleContainer title="Employee List" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee Mobile Number</th>
                            <th>Employee Age</th>
                            <th>Employee Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees && employees.length > 0 ? employees.map((elements: EMPLOYEE_OBJECT) => (
                                <tr key={elements._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-28 rounded">
                                                    {elements.image && <img src={elements.image} alt="Avatar" className='!object-contain' />}
                                                </div>
                                            </div>
                                            <div className='gap-y-2 flex flex-col'>
                                                <div className="font-bold">{elements.fullName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{elements.email}</td>
                                    <td>{elements.phone}</td>
                                    <td>{elements.age}</td>
                                    <td>{elements.salary}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => updateEmployee(elements)}><PencilIcon className="w-5" /></button>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteEmployee(elements._id, elements.fullName)}><TrashIcon className="w-5" /></button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={8} className='text-center'> No employee found add some employee for display </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </TitleContainer>
    )
}

export default EmployeePage
