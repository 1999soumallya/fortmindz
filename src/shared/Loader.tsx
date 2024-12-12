import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loader: React.FunctionComponent<{ visible: boolean }> = ({ visible }) => (
    <>
        {
            visible && (
                <div className='absolute min-h-dvh w-dvw flex justify-center items-center z-50' style={{ backdropFilter: 'brightness(0.5)' }}>
                    <Oval visible={visible} height="80" width="80" color="#4a00ff" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" />
                </div>
            )
        }
    </>
)

export default Loader