import { FunctionComponent, ReactNode, } from "react"
import { Control, Controller, FieldValues } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface INPUT_PROPS {
    rightIcon?: boolean;
    labelTitle: string,
    labelStyle?: string | null,
    inputClass?: string | null
    control?: Control<FieldValues>;
    name: string;
    containerStyle?: string | null,
    placeholder?: string | null,
    icon?: ReactNode | null;
    onClickHandler?: () => void;
}

const InputPhoneNumber: FunctionComponent<INPUT_PROPS> = ({ rightIcon = false, onClickHandler, inputClass, labelTitle, labelStyle, control, name, containerStyle, placeholder, icon }) => {

    return (
        <div className={`form-control w-full relative ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <Controller control={control} name={name} render={({ field: { onChange, value } }) => (
                <PhoneInput country={'in'} placeholder={placeholder || ""} inputClass={"!input !input-bordered !w-full !pl-[48px] " + inputClass} value={String(value)} onChange={(phone: string) => {
                    onChange(phone)
                }} />
            )} />

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


export default InputPhoneNumber