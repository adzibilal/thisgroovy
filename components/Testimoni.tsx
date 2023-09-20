// pages/testimoni.tsx

import { generateTestimonialImageURL } from '@/utils'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

const Testimoni: NextPage<Props> = ({}) => {
    const totalImages = 14 // Jumlah total gambar testimonial

    // Membuat daftar elemen <img> untuk semua gambar dari nomor 1 hingga 14
    const testimonialImages = []
    for (let i = 1; i <= totalImages; i++) {
        const imageURL = generateTestimonialImageURL(i)
        testimonialImages.push(
            <div className='carousel-item w-[30%] h-auto max-md:w-[90%]' key={`testimonial-${i}`}>
                <Image width={400} height={600} src={imageURL} alt={`Testi ${i}`}  className='w-full h-auto'/>
            </div>
        )
    }

    return (
        <div className='max-container pt-44 max-md:py-20' id='testimoni'>
            <div className='!text-center mb-10'>
                <h1 className='hero-title font-quick font-extrabold text-3xl stroke-pink-gro'>
                    Testimoni
                </h1>
                <p className='mt-1 text-xl'>Testimoni Groovy Gank</p>
            </div>
            <div className='carousel carousel-center gap-2'>
                {testimonialImages}
            </div>
        </div>
    )
}

export default Testimoni
