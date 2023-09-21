import { NextPage } from 'next'

import AdminLayout from './layout'

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <AdminLayout>
            <div className='max-container py-14 flex items-center justify-center text-center'>
                <h1 className='hero-title font-quick font-extrabold text-5xl stroke-pink-gro'>
                    Selamat datang admin thisgroovy!!!
                </h1>
            </div>
        </AdminLayout>
    )
}

export default Page
