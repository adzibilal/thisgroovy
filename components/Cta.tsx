import { NextPage } from 'next'

interface Props {}

const Cta: NextPage<Props> = ({}) => {
    return (
        <div className='bg-pattern py-10'>
            <div className='max-container h-96 bg-white rounded-lg shadow-2xl flex items-center justify-center flex-col gap-12 p-5'>
                <h1 className='hero-title font-quick font-extrabold text-5xl stroke-pink-gro text-center'>
                    Tunggu apa lagi ? yuk gabung sekarang!
                </h1>
                <div className='btn-nav w-max !px-10 !py-4 !outline-yellow-gro'>
                    Daftar Sekarang
                </div>
            </div>
        </div>
    )
}

export default Cta
