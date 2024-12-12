import SubTitle from '@/components/typography/SubTitle'
import React from 'react'

const TitleContainer: React.FunctionComponent<{ title: string, children: React.ReactNode, topMargin?: string, TopSideButtons?: React.ReactNode }> = ({ title, children, topMargin, TopSideButtons }) => {
    return (
        <div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>

            {/* Title for Card */}
            <SubTitle styleClass={TopSideButtons ? "inline-block" : ""}>
                {title}
                {/* Top side button, show only if present */}
                {TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>}
            </SubTitle>

            <div className="divider mt-2"></div>

            {/** Card Body */}
            <div className='h-full w-full pb-6 bg-base-100'>
                {children}
            </div>
        </div>
    )
}

export default TitleContainer
