import { Hourglass } from 'react-loader-spinner'

export default function SuspenseContainer() {
    return (
        <div className='w-full h-screen bg-base-100 flex items-center justify-center'>
            <Hourglass visible={true} height="80" width="80" ariaLabel="hourglass-loading" wrapperStyle={{}} wrapperClass="" colors={['#306cce', '#72a1ed']} />
        </div>
    )
}
