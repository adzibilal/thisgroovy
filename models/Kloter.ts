import mongoose, { Document, Schema, Model } from 'mongoose'

// Definisikan struktur data untuk model Kloter
export interface IKloter extends Document {
    title: string
    subtitle?: string
    slot?: { tanggal: Date; name?: string; phone?: string }[]
    notes?: string
    passcode: string
    createdAt: Date
    updatedAt: Date
}

// Periksa apakah model Kloter sudah ada sebelumnya
let Kloter: Model<IKloter>

try {
    Kloter = mongoose.model<IKloter>('Kloter')
} catch (error) {
    // Jika model belum ada, maka kompilasi model baru
    const kloterSchema = new Schema<IKloter>(
        {
            title: { type: String, required: true },
            subtitle: { type: String, required: true },
            slot: [
                {
                    tanggal: { type: Date, required: true },
                    name: { type: String, required: false },
                    phone: { type: String, required: false }
                }
            ],
            notes: { type: String, required: false },
            passcode: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now },
            updatedAt: { type: Date, required: true, default: Date.now }
        },
        { timestamps: true }
    )

    Kloter = mongoose.model<IKloter>('Kloter', kloterSchema)
}

export default Kloter
