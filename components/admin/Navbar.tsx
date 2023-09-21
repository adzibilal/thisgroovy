import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
    return (
        <div className='bg-sky-blue'>
            <div className='max-container h-[70px] flex items-center justify-between max-sm:flex-col max-md:h-auto max-md:py-4 max-md:gap-4'>
                <Link href='/admin'>
                    <img src='/img/logo.png' className='h-[50px]' />
                </Link>

                <div className='flex items-center gap-10'>
                    <div className='nav-links flex gap-4'>
                        <div className='nav-link'>
                            <Link href='/admin'>Home</Link>
                        </div>
                        <div className='nav-link'>
                            <Link href='/admin/kloters'>Kloter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
