import '@/app/globals.css'
import './admin.css'
import Navbar from '@/components/admin/Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    useEffect(() => {
        // Pengecekan token di sini
        const token = localStorage.getItem('token') // Gantilah dengan kunci yang sesuai

        if (!token) {
            // Jika tidak ada token, arahkan ke halaman /login
            router.push('/admin/login')
        }
    }, [])
    return (
        <section>
            <Navbar />
            {children}
        </section>
    )
}
