import InputText from "@/components/input/InputText"
import ErrorText from "@/components/typography/ErrorText"
import axios from "@/config/axios"
import TitleContainer from "@/containers/TitleContainer"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import InputFile from "@/components/input/InputFile"
import InputPhoneNumber from "@/components/input/InputPhoneNumber"
import { EMPLOYEE_ADD } from "@/types/employee.types"
import { CREATE_EMPLOYEE } from "@/utils/api.url"
import * as YUP from 'yup';

const CreateEmployee: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate()

    const formSchema: YUP.ObjectSchema<EMPLOYEE_ADD> = YUP.object().shape({
        fullName: YUP.string().required('Provide valid employee name for create new employee'),
        email: YUP.string().required('Provide valid employee email for create new employee').email('Provide valid employee email for create new employee'),
        phone: YUP.number().required('Provide valid employee mobile number for create new employee').typeError('Provide valid employee mobile number for create new employee'),
        image: YUP.string().required('Provide your profile picture for create new employee'),
        age: YUP.number().required('Provide valid employee age for create new employee').typeError('Provide valid employee age for create new employee'),
        salary: YUP.number().required('Provide valid employee salary for create new employee').typeError('Provide valid employee salary for create new employee'),
    })

    const { register, handleSubmit, formState: { errors }, control, setValue, watch, getValues } = useForm<EMPLOYEE_ADD>({ resolver: yupResolver(formSchema), mode: 'all' })

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            if (!/image/.test(event.target.files[0].type)) {
                toast.error('Only image files are allowed')
                return
            }
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0])
            reader.onloadend = () => {
                setValue('image', reader.result as string)
            }
        }
    }

    const formSubmit = (data: EMPLOYEE_ADD) => {
        setLoading(true)
        axios.post(CREATE_EMPLOYEE, { ...data, phone: `+${data.phone}` }).then((response) => {
            if (response.data.isSuccess) {
                toast.success(response.data.message)
                navigate('/')
            } else {
                toast.error(response.data.message)
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            if (error.response) {
                toast.error(error.response.data.message)
            }
        })
    }

    const cancelHandler = () => {
        navigate('/')
    }

    return (
        <TitleContainer title="Create New Employee" topMargin="mt-2">
            <div className="overflow-x-auto w-full">

                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="mb-4 mx-4">
                        <div className="mb-4">
                            <InputText type="text" inputClass={errors.fullName && "input-error"} containerStyle="mt-4 mb-4" labelTitle="Employee Fullname" placeholder={'Enter Employee Fullname'} register={register('fullName')} />
                            {errors.fullName && <ErrorText className="mt-2">{errors.fullName.message}</ErrorText>}
                        </div>

                        <div className="mb-4">
                            <InputText type="email" inputClass={errors.email && "input-error"} containerStyle="mt-4 mb-4" labelTitle="Employee Email Address" placeholder={'Enter Employee Email Address'} register={register('email')} />
                            {errors.email && <ErrorText className="mt-2">{errors.email.message}</ErrorText>}
                        </div>

                        <div className="mb-4">
                            <InputPhoneNumber control={control} inputClass={errors.phone && "input-error"} containerStyle="mt-4 mb-4" labelTitle='Employee mobile number' placeholder={'Enter Employee Mobile Number'} name='phone' />
                            {errors.phone && <ErrorText className="mt-2">{errors.phone.message}</ErrorText>}
                        </div>

                        <div className="mb-4">
                            <InputText type="text" inputClass={errors.age && "input-error"} containerStyle="mt-4 mb-4" labelTitle="Employee Age" placeholder={'Enter Employee Age'} register={register('age')} />
                            {errors.age && <ErrorText className="mt-2">{errors.age.message}</ErrorText>}
                        </div>

                        <div className="mb-4">
                            <InputText type="text" inputClass={errors.salary && "input-error"} containerStyle="mt-4 mb-4" labelTitle="Employee Salary" placeholder={'Enter Employee Salary'} register={register('salary')} />
                            {errors.salary && <ErrorText className="mt-2">{errors.salary.message}</ErrorText>}
                        </div>

                        <div className="mb-4">
                            <InputFile labelTitle='Employee profile picture' containerStyle="mt-4 mb-4" accept="image/*" placeholder={'Enter Employee Profile Picture'} changeHandler={uploadImage} />
                            {errors.image && <ErrorText className="mt-2">{errors.image.message}</ErrorText>}
                        </div>

                        {
                            watch('image') ? (
                                <div className="mb-4 text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={getValues('image')} />
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>

                    <div className="modal-action items-center">
                        <button className="btn btn-ghost" type='button' onClick={() => cancelHandler()} disabled={loading}>
                            Cancel
                        </button>
                        <button className="btn btn-primary px-6" type='submit' disabled={loading}>
                            {loading ? <span className="loading loading-ring loading-lg"></span> : 'Create Employee'}
                        </button>
                    </div>
                </form>
            </div>
        </TitleContainer>
    )
}

export default CreateEmployee
