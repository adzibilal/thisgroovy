import { NextPage } from 'next'

import AdminLayout from '../layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IKloter } from '@/models/Kloter'
import KloterCard from '@/components/admin/KloterCard'
import Link from 'next/link'
import Pagination from '@/components/admin/Pagination'
import LoadingOverlay from '@/components/admin/LoadingOverlay'

interface Props {}
interface IPagination {
    currentPage: number
    totalPages: number
    totalProjects: number
}

const Page: NextPage<Props> = ({}) => {
    const router = useRouter()
    const [kloters, setKlotres] = useState<IKloter[]>([])
    const [pagination, setPagination] = useState<IPagination>({
        currentPage: 1,
        totalPages: 0,
        totalProjects: 0
    })
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    const fetchKloter = async (page: number, searchQuery?: string) => {
        try {
            console.error(searchQuery)
            if (!searchQuery) {
                const response = await fetch(
                    `/api/kloters?page=${page}&perPage=9`
                )
                if (response.ok) {
                    const data = await response.json()
                    setKlotres(data.kloters)
                    setPagination({
                        currentPage: data.currentPage,
                        totalPages: data.totalPages,
                        totalProjects: data.totalKloters
                    })
                } else {
                    console.error('Failed to fetch projects')
                }
            } else {
                const response = await fetch(
                    `/api/kloters?page=${page}&perPage=9&search=${searchQuery}`
                )
                if (response.ok) {
                    const data = await response.json()
                    setKlotres(data.kloters)
                    setPagination({
                        currentPage: data.currentPage,
                        totalPages: data.totalPages,
                        totalProjects: data.totalKloters
                    })
                } else {
                    console.error('Failed to fetch projects')
                }
            }
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }
    const handleSearchChange = (e: any) => {
        const { name, value } = e.target
        setSearchValue(value)
    }
    const handlePageChange = (page: number) => {
        fetchKloter(page, searchValue)
    }

    useEffect(() => {
        fetchKloter(1)
    }, [])
    return (
        <AdminLayout>
            <div className='max-container py-14'>
                <div className='flex justify-between items-center mb-10 gap-20 max-md:flex-col max-md:gap-5 max-md:items-start'>
                    <h1 className='hero-title font-quick font-extrabold text-5xl '>
                        Kloters
                    </h1>
                    <div className='form-control w-full'>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Search…'
                                onChange={handleSearchChange}
                                className='input bg-yellow-gro/20 w-full'
                            />
                            <button
                                className='btn btn-square bg-pink-gro'
                                onClick={() => fetchKloter(1, searchValue)}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Link href='/admin/kloters/add'>
                        <div className='btn-card w-max min-w-fit'>
                            Buat Kloter
                        </div>
                    </Link>
                </div>

                {loading && <LoadingOverlay/>}

                <div className='grid grid-cols-3 gap-3 max-md:grid-cols-1'>
                    {kloters.map(item => (
                        <KloterCard item={item} key={item._id} />
                    ))}
                </div>

                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </AdminLayout>
    )
}

export default Page
