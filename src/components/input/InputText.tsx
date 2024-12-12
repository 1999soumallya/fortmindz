import { FunctionComponent, ReactNode, } from "react"
import { UseFormRegisterReturn } from "react-hook-form";

interface INPUT_PROPS {
    rightIcon?: boolean;
    labelTitle: string,
    labelStyle?: string | null,
    inputClass?: string | null
    type?: string | null,
    containerStyle?: string | null,
    placeholder?: string | null,
    register?: UseFormRegisterReturn;
    icon?: ReactNode | null
    onClickHandler?: () => void;
    [key: string]: unknown;
}

const InputText: FunctionComponent<INPUT_PROPS> = ({ rightIcon = false, onClickHandler, inputClass, labelTitle, labelStyle, type, containerStyle, placeholder, register, icon, ...rest }) => {

    return (
        <div className={`form-control w-full relative ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input type={type || "text"} placeholder={placeholder || ""} className={"input input-bordered w-full " + inputClass} {...register} {...rest} />
            {
                rightIcon && (
                    <button type="button" className="btn rounded-full btn-sm absolute right-[10px] top-[44px]" onClick={onClickHandler}>
                        {icon}
                    </button>
                )
            }
        </div>
    )
}


export default InputText