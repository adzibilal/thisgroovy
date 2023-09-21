import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from './layout'

interface Props {}

const Login: NextPage<Props> = ({}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    useEffect(() => {
        // Cek apakah data sesi sudah ada di localStorage
        const token = localStorage.getItem('token')
        if (token) {
            router.push('/admin') // Redirect ke halaman '/admin' jika token sudah ada
        }
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault() // Mencegah pengiriman formulir standar
        setIsLoading(true)

        // Simpan kode autentikasi di sini, misalnya menggunakan fetch atau axios

        // Misalnya, Anda dapat menggunakan fetch
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            if (response.ok) {
                // Autentikasi berhasil, arahkan pengguna ke halaman selanjutnya
                const data = await response.json()
                localStorage.setItem('token', data.token)
                router.push('/admin')
            } else {
                const data = await response.json()
                setError(data.error || 'Terjadi kesalahan saat login')
            }
        } catch (error) {
            setError('Terjadi kesalahan saat login')
        }

        setIsLoading(false)
    }

    return (
        <AdminLayout>
            <div className='max-container py-10'>
                <label className='label'>
                    <span className='label-text label-grv !text-4xl text-center'>
                        Login
                    </span>
                </label>
                <form onSubmit={handleLogin}>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>
                                Username
                            </span>
                        </label>
                        <input
                            type='text'
                            name='subtitle'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full'
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text label-grv'>
                                Password
                            </span>
                        </label>
                        <input
                            name='subtitle'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Ketik disini'
                            className='input input-bordered inp-grv w-full'
                        />
                    </div>

                    <button
                        className='btn w-full mt-6'
                        type='submit'
                        disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && (
                        <p className='text-error mt-3 text-center'>{error}</p>
                    )}
                </form>
            </div>
        </AdminLayout>
    )
}

export default Login
