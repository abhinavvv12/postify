const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.URL_END_POINT
})

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })

    return result;
}

module.exports = uploadFile