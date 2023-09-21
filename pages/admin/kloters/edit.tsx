// pages/admin/kloters/[kloterId].tsx

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import AdminLayout from '../layout'
import LoadingOverlay from '@/components/admin/LoadingOverlay'
import { parseInputDate } from '@/utils'

interface Props {}

interface ISlotItem {
    tanggal: Date
    name?: string
    phone?: string
}

interface IKloter {
    title: string
    subtitle?: string
    slot: ISlotItem[]
    notes?: string
    passcode: string
    createdAt: Date
    updatedAt: Date
}

const EditKloter: NextPage<Props> = () => {
    const router = useRouter()
    const { kloterId } = router.query
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<IKloter>({
        title: '',
        subtitle: '',
        slot: [
            {
                tanggal: new Date(),
                name: '',
                phone: ''
            }
        ],
        passcode: '',
        notes: '',
        createdAt: new Date(),
        updatedAt: new Date()
    })

    useEffect(() => {
        // Fetch the kloter data using kloterId from the router.query
        if (kloterId) {
            // Make an API request to get the kloter data
            const fetchKloterData = async () => {
                try {
                    setLoading(true)
                    const response = await fetch(
                        `/api/kloters?kloterId=${kloterId}`
                    )
                    if (response.ok) {
                        const kloterData = await response.json()
                        console.error(kloterData)
                        setFormData(kloterData)
                    } else {
                        console.error('Failed to fetch kloter data')
                    }
                } catch (error) {
                    console.error('Error fetching kloter data:', error)
                } finally {
                    setLoading(false)
                }
            }

            fetchKloterData()
        }
    }, [kloterId])

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSlotInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target
        const updatedSlot = [...formData.slot]
        if (name === 'tanggal') {
            updatedSlot[index] = {
                ...updatedSlot[index],
                [name]: new Date(value)
            }
        } else {
            updatedSlot[index] = {
                ...updatedSlot[index],
                [name]: value
            }
        }
        setFormData(prevState => ({
            ...prevState,
            slot: updatedSlot
        }))
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/kloters/`, {
                method: 'PUT', // Use PUT method for updating data
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('Data updated successfully')
                router.push('/admin/kloters')
            } else {
                console.error('Failed to update data')
            }
        } catch (error) {
            console.error('Error updating data:', error)
        } finally {
            setLoading(false)
        }
    }

    const addSlotItem = () => {
        setFormData({
            ...formData,
            slot: [
                ...formData.slot,
                {
                    tanggal: new Date(), // Initialize tanggal as a Date object
                    name: '',
                    phone: ''
                }
            ]
        })
    }
    const deleteSlotItem = (index: number) => {
        const updatedSlot = [...formData.slot]
        updatedSlot.splice(index, 1)
        setFormData(prevState => ({
            ...prevState,
            slot: updatedSlot
        }))
    }
    const handleDeleteKloter = async () => {
        if (window.confirm('Are you sure you want to delete this Kloter?')) {
            try {
                setLoading(true)

                const response = await fetch(`/api/kloters`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: kloterId }) // Assuming kloterId is defined in your component
                })

                if (response.ok) {
                    console.log('Kloter deleted successfully')
                    router.push('/admin/kloters')
                } else {
                    console.error('Failed to delete Kloter')
                }
            } catch (error) {
                console.error('Error deleting Kloter:', error)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <AdminLayout>
            {loading && <LoadingOverlay />}
            <div className='max-container py-8'>
                <label className='label'>
                    <span className='label-text label-grv !text-4xl'>
                        Edit Kloter {formData.title}
                    </span>
                </label>
                <div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>Judul</span>
                        </label>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full'
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>
                                Subtitle
                            </span>
                        </label>
                        <input
                            type='text'
                            name='subtitle'
                            value={formData.subtitle}
                            onChange={handleInputChange}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full'
                        />
                    </div>

                    {/* Lanjutkan dengan input fields lain sesuai dengan struktur model */}
                    <div className='bg-sky-blue/10 p-3 rounded-lg mt-4'>
                        <label className='label'>
                            <span className='label-text label-grv !text-3xl'>
                                List Slot
                            </span>
                        </label>
                        {formData.slot.map((item, index) => (
                            <div
                                key={index}
                                className=' grid grid-cols-3 gap-3 max-md:grid-cols-1'>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text label-grv'>
                                            Tanggal
                                        </span>
                                    </label>
                                    <input
                                        type='date'
                                        name={`tanggal`}
                                        value={parseInputDate(item.tanggal)}
                                        onChange={e =>
                                            handleSlotInputChange(e, index)
                                        }
                                        className='input input-bordered inp-grv w-full'
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text label-grv'>
                                            Nama
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        name={`name`}
                                        value={item.name}
                                        onChange={e =>
                                            handleSlotInputChange(e, index)
                                        }
                                        placeholder='Ketik disini'
                                        className='input input-bordered inp-grv w-full'
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text label-grv'>
                                            Nomor Telepon
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        name={`phone`}
                                        value={item.phone}
                                        onChange={e =>
                                            handleSlotInputChange(e, index)
                                        }
                                        placeholder='Ketik disini'
                                        className='input input-bordered inp-grv w-full'
                                    />
                                </div>
                                <button
                                    onClick={() => deleteSlotItem(index)}
                                    className='btn btn-error text-white'
                                    type='button'>
                                    Hapus Slot
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='mt-2'>
                        <button
                            onClick={addSlotItem}
                            className='btn btn-primary'>
                            Tambah Slot
                        </button>
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>
                                Passcode
                            </span>
                        </label>
                        <input
                            type='text'
                            name='passcode'
                            value={formData.passcode}
                            onChange={handleInputChange}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full'
                        />
                        <small>
                            *Kode akan digunakan untuk mengambil slot 1-3
                        </small>
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>Notes</span>
                        </label>
                        <textarea
                            id=''
                            name='notes'
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full pt-2'></textarea>
                    </div>
                    <div className='mt-4'>
                        <button
                            onClick={handleSubmit}
                            className='btn btn-primary'>
                            Simpan
                        </button>
                        <button
                            onClick={handleDeleteKloter}
                            className='btn btn-error ml-2 text-white'>
                            Hapus Kloter
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default EditKloter
