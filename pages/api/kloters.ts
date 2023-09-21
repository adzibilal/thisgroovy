import { NextApiRequest, NextApiResponse } from 'next'
import connectToDB from '@/utils/database'
import Kloter, { IKloter } from '@/models/Kloter'

connectToDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req
    const { kloterId, page, perPage, search } = query
    //@ts-ignore
    const pageNumber = parseInt(page) || 1
    //@ts-ignore
    const itemsPerPage = parseInt(perPage) || 10

    if (req.method === 'GET') {
        try {
            if (kloterId) {
                // Jika kloterId ada, cari kloter berdasarkan kloterId
                const kloter = await Kloter.findById(kloterId)

                if (!kloter) {
                    return res.status(404).json({ error: 'Kloter not found' })
                }

                res.status(200).json(kloter)
            } else if (search) {
                // Jika terdapat parameter 'search', lakukan pencarian berdasarkan judul, subtitle, dan notes
                const kloters = await Kloter.find({
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { subtitle: { $regex: search, $options: 'i' } },
                        { notes: { $regex: search, $options: 'i' } }
                    ]
                })

                const totalKloters = kloters.length
                const totalPages = Math.ceil(totalKloters / itemsPerPage)

                const paginatedKloters = await Kloter.find({
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { subtitle: { $regex: search, $options: 'i' } },
                        { notes: { $regex: search, $options: 'i' } }
                    ]
                })
                    .skip((pageNumber - 1) * itemsPerPage)
                    .limit(itemsPerPage)

                res.status(200).json({
                    kloters: paginatedKloters,
                    totalKloters,
                    totalPages,
                    currentPage: pageNumber
                })
            } else {
                // Jika kloterId tidak ada dan tidak ada parameter 'search', ambil data kloter dengan pagination
                const totalKloters = await Kloter.countDocuments()
                const totalPages = Math.ceil(totalKloters / itemsPerPage)
                const kloters = await Kloter.find()
                    .skip((pageNumber - 1) * itemsPerPage)
                    .limit(itemsPerPage)

                res.status(200).json({
                    kloters,
                    totalKloters,
                    totalPages,
                    currentPage: pageNumber
                })
            }
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'POST') {
        const { title, subtitle, slot, passcode, notes } = body

        try {
            const newKloter = new Kloter({
                title,
                subtitle,
                slot,
                passcode,
                notes
            })

            await newKloter.save()
            res.status(201).json(newKloter)
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'PUT') {
        const { _id, title, subtitle, slot, passcode, notes } = body

        try {
            const updatedKloter = await Kloter.findByIdAndUpdate(_id, {
                title,
                subtitle,
                slot,
                passcode,
                notes
            })

            if (!updatedKloter) {
                return res.status(404).json({ error: 'Kloter not found' })
            }

            res.status(200).json(updatedKloter)
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else if (req.method === 'DELETE') {
        const { id } = body

        try {
            const deletedKloter = await Kloter.findByIdAndRemove(id)

            if (!deletedKloter) {
                return res.status(404).json({ error: 'Kloter not found' })
            }

            res.status(200).json({ message: 'Kloter deleted successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Server error' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}
