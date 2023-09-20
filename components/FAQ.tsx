import { NextPage } from 'next'

interface Props {}

const FAQ: NextPage<Props> = ({}) => {
    return (
        <div className='max-container grid grid-cols-1 gap-10 items-center py-44 max-md:grid-cols-1 max-md:py-20'>
            <div className='!text-center'>
                <h1 className='hero-title font-quick font-extrabold text-3xl stroke-pink-gro'>
                    Frequently Asked Question
                </h1>
                <p className='mt-1 text-xl'>All About Nabung Groovy</p>
            </div>
            <div className='accordion grid grid-cols-2 gap-3 max-md:grid-cols-1'>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1'/>
                    <div className='collapse-title text-xl font-medium'>
                        Gimana cara nabungnya kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Kamu cukup sebut nomor slot kloter arisan yang kamu
                            mau ambil. Jika nomor tersebut kosong dan kamu
                            memenuhi kualifakasi syarat dan ketentuan maka nama
                            kamu akan dimasukan ke list kloteran tersbut ya!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Persyaratannya apa aja kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            kamu bisa langsung whatsapp admin ya! gampang kok,
                            cuma data pribadi saja yang pastinya privasi dan
                            keamanan terjaga oleh admin ya!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Domisili dan udah sejak kapan kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Domisili Bandung ya, nabung groovy handled by admin
                            ©adellafg, sudah ada dan aktif sejak tahun 2021, be
                            smart and careful! ya!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Untuk new member boleh book no slot herapa kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Hi, untuk new member boleh ambil slot 3 terbawah
                            dulu ya, nanti setelah 1 klot beres new member
                            diperbolehkan ambil slot awal, tenang aja! slot
                            bawah banyak cashback loh!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Cashback itu maksudnya gimana kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Cashback itu potongan untuk pembayaran pertama
                            ketika kamu payment, misal cashback 25% dari get 1
                            Juta, pembayaran pertama seharusnya 100K (misal) ,
                            kamu dapat potongan dan bayar 75K aja ya!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Nabung disini buat apa sih kak? untungnya apa?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Wah!! banyak banget dong pastinya, ada yang buat
                            ulang tahun, buat kadoin ayang, buat bayar kuliah,
                            buat safety money kalo ada keperluan mendesak,
                            bahkan untuk biaya-biaya kaya rumah sakit, dan
                            banyak lagi, yuk gabung biar kamu ga bingung nabung
                            caranya gimana, yuk!!
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Ada klot yang ready kak?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Ada dongggg, bisa cek instagram kita ya!
                            @thisgroovy_
                        </p>
                    </div>
                </div>
                <div className='collapse collapse-faq'>
                    <input type='radio' name='my-accordion-1' />
                    <div className='collapse-title text-xl font-medium'>
                        Aku mau ikut kak, hubungi kemana ya?
                    </div>
                    <div className='collapse-content'>
                        <p>
                            Boleh dong!, bisa hubungi dm / whatsapp no yang
                            tersedia di bio, atau join groupnya ya!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
