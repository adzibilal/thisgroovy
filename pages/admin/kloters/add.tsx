import { NextPage } from 'next'
import AdminLayout from '../layout'
import { useState } from 'react'
import LoadingOverlay from '@/components/admin/LoadingOverlay'
import { useRouter } from 'next/router'

interface Props {}

export interface ISlotItem {
    tanggal: Date
    name?: string
    phone?: string
}

export interface IKloter {
    title: string
    subtitle?: string
    slot: ISlotItem[]
    notes?: string
    passcode: string
    createdAt: Date
    updatedAt: Date
}

const Add: NextPage = () => {
    const router = useRouter()
    // State untuk menyimpan data yang akan diinputkan
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

    // Handler untuk mengubah state saat input berubah
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handler untuk menambahkan item ke dalam array "slot"
    const addSlotItem = () => {
        setFormData({
            ...formData,
            slot: [
                ...formData.slot,
                {
                    tanggal: new Date(),
                    name: '',
                    phone: ''
                }
            ]
        })
    }

    // Handler untuk mengirim data ke server (simpan ke database)
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/kloters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                // Data berhasil disimpan, bisa tambahkan logika redirect atau pesan sukses
                console.log('Data berhasil disimpan')
                router.push('/admin/kloters')
                setLoading(false)
            } else {
                // Data gagal disimpan, bisa tambahkan pesan error
                console.error('Gagal menyimpan data')
                setLoading(false)
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error)
            setLoading(false)
        }
    }

    // Handler untuk perubahan input slot
    const handleSlotInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target
        const updatedSlot = [...formData.slot]
        // console.error(index)
        // console.error('name',name,'value',value)
        // console.error('updatedSlot',updatedSlot)
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
        console.error('updatedSlot', updatedSlot)
        setFormData(prevState => ({
            ...prevState,
            slot: updatedSlot
        }))
    }

    return (
        <AdminLayout>
            {loading && <LoadingOverlay />}
            <div className='max-container py-8'>
                <label className='label'>
                    <span className='label-text label-grv !text-4xl'>
                        Form Tambah Kloter
                    </span>
                </label>
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
                        <span className='label-text label-grv'>Subtitle</span>
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
                                    value={
                                        item.tanggal.toISOString().split('T')[0]
                                    }
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
                        </div>
                    ))}
                </div>

                <div className='mt-2'>
                    <button onClick={addSlotItem} className='btn btn-primary'>
                        Tambah Slot
                    </button>
                </div>

                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text label-grv'>Passcode</span>
                    </label>
                    <input
                        type='text'
                        name='passcode'
                        value={formData.passcode}
                        onChange={handleInputChange}
                        placeholder='Ketik disini'
                        className='input input-bordered inp-grv w-full'
                    />
                    <small>*Kode akan digunakan untuk mengambil slot 1-3</small>
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
                    <button onClick={handleSubmit} className='btn btn-primary'>
                        Simpan
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Add
