import React from 'react'

const SubTitle: React.FunctionComponent<{ styleClass?: string, children?: React.ReactNode }> = ({ styleClass, children }) => {
    return (
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default SubTitle
