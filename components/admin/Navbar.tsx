import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
    const [token, setToken] = useState(false)
    const router = useRouter()
    const handleLogout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('token')

        // Redirect ke halaman /login
        router.push('/admin/login')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            setToken(true)
        }
    }, [])

    return (
        <div className='bg-sky-blue'>
            <div className='max-container h-[70px] flex items-center justify-between max-sm:flex-col max-md:h-auto max-md:py-4 max-md:gap-4'>
                <Link href='/admin'>
                    <img src='/img/logo.png' className='h-[50px]' />
                </Link>

                <div className='flex items-center gap-10'>
                    <div className='nav-links flex gap-4'>
                        {token && (
                            <>
                                <Link href='/admin'>
                                    <div className='nav-link'>Home</div>
                                </Link>
                                <Link href='/admin/kloters'>
                                    <div className='nav-link'>Kloter</div>
                                </Link>
                                <div
                                    className='nav-link'
                                    onClick={handleLogout}>
                                    Logout
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
