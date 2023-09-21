import { NextPage } from 'next'

interface Props {}

const LoadingOverlay: NextPage<Props> = ({}) => {
    return (
        <div className='bg-black/20 fixed w-full h-screen top-0 left-0 flex items-center justify-center'>
            <span className='loading loading-spinner text-secondary'></span>
        </div>
    )
}

export default LoadingOverlay
