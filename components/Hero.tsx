import { NextPage } from 'next'

interface Props {}

const Hero: NextPage<Props> = ({}) => {
    return (
        <div className='bg-hero bg-pattern-opacity'>
            <div className='hero-container'>
                <div className=''>
                    <h1 className='hero-title font-quick font-extrabold text-5xl stroke-pink-gro'>
                        Bergabunglah dengan Arisan thisgroovy dan Raih Manfaat
                        Besar!
                    </h1>
                    <p className='my-5'>
                        Selamat datang di Arisan thisgroovy, tempat kebahagiaan
                        dan manfaat bertemu! Sejak tahun 2020, kami telah
                        menjadi pilihan aman dan terpercaya bagi ratusan anggota
                        yang telah bergabung. Kami adalah keluarga besar dengan
                        lebih dari 50 kloter yang sukses, dan sekarang giliran
                        Anda untuk merasakan manfaatnya.
                    </p>
                    <div className='btn-nav w-max !px-10 !py-4 !outline-yellow-gro'>
                        Daftar Sekarang
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src='/img/hero-1.png' alt='' className='h-full max-md:w-[50%] max-md:h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero
