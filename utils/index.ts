export function generateTestimonialImageURL(imageNumber: number): string {
    // Tentukan rentang angka gambar (misalnya, dari 1 hingga 14)
    const minImageNumber = 1
    const maxImageNumber = 14

    // Pastikan imageNumber berada dalam rentang yang valid
    if (imageNumber < minImageNumber || imageNumber > maxImageNumber) {
        throw new Error(
            `Invalid imageNumber. It should be between ${minImageNumber} and ${maxImageNumber}.`
        )
    }

    // Buat URL gambar berdasarkan imageNumber
    const imageURL = `/img/testi/${imageNumber}.jpg`

    return imageURL
}
