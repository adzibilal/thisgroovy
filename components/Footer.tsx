import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
    return (
        <div className='bg-sky-blue py-6'>
            <div className='max-container'>
                <Link href='/'>
                    <img src='/img/logo.png' className='h-[50px]' />
                </Link>
            </div>
        </div>
    )
}

export default Footer
