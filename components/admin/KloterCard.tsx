import { IKloter } from '@/models/Kloter'
import { formatDate } from '@/utils'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    item: IKloter
}

const KloterCard: NextPage<Props> = ({ item }) => {
    return (
        <div className='card-kloter'>
            <div className='card-title'>{item.title}</div>
            <div className='text-black '>{item.subtitle}</div>
            <div className='text-sm mb-3'>passcode: {item.passcode}</div>
            <ol>
                {item.slot?.map((item,index) => (
                    <li className='bg-yellow-gro/20 px-3 py-2 rounded-md mb-2' key={index}>
                        <div className='font-semibold text-sm text-black/20'>
                            {formatDate(item.tanggal)}
                        </div>
                        {item.name && item.phone ? (
                            <div className='text-black'>
                                {item.name} - {item.phone}
                            </div>
                        ) : (
                            <div className='text-black'>Slot Tersedia</div>
                        )}
                    </li>
                ))}
            </ol>
            <div className='text-sm mb-3'>{item.notes}</div>

            <Link href={`/admin/kloters/edit?kloterId=${item._id}`}>
                <div className='btn-card'>Edit Kloter</div>
            </Link>
        </div>
    )
}

export default KloterCard
