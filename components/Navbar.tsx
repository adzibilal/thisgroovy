'use client'
import { ctaWhatsapp } from '@/utils'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
    return (
        <div className='bg-sky-blue'>
            <div className='max-container h-[70px] flex items-center justify-between max-sm:flex-col max-md:h-auto max-md:py-4 max-md:gap-4'>
                <Link href='/'>
                    <img src='/img/logo.png' className='h-[50px]' />
                </Link>

                <div className='flex items-center gap-10'>
                    <div className='nav-links flex gap-4'>
                        {/* <div className='nav-link'>
                            <Link href='/'>Tentang</Link>
                        </div> */}
                        <div className='nav-link'>
                            <Link href='#testimoni'>Testimoni</Link>
                        </div>
                        <div className='nav-link'>
                            <Link href='#faq'>FAQ</Link>
                        </div>
                    </div>

                    <div
                        className='btn-nav max-md:hidden'
                        onClick={() => ctaWhatsapp()}>
                        Daftar Sekarang
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
