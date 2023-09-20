import Cta from '@/components/Cta'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Testimoni from '@/components/Testimoni'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Testimoni/>
      <FAQ/>
      <Cta/>
    </div>
  )
}
