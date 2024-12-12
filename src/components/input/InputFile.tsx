import React, { FunctionComponent, } from "react"

interface INPUT_PROPS {
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputClass?: string | null;
    labelTitle: string;
    labelStyle?: string | null;
    containerStyle?: string | null;
    placeholder?: string | null;
    [key: string]: unknown;
}

const InputFile: FunctionComponent<INPUT_PROPS> = ({ changeHandler, inputClass, labelTitle, labelStyle, containerStyle, placeholder, ...rest }) => {

    return (
        <div className={`form-control w-full relative ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input type="file" placeholder={placeholder || ""} className={"file-input file-input-bordered w-full " + inputClass} onChange={changeHandler} {...rest} />
        </div>
    )
}


export default InputFile