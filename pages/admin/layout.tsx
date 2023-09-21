import '@/app/globals.css'
import './admin.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/admin/Navbar'

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section>
           <Navbar/>
            {children}
        </section>
    )
}
