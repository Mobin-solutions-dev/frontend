module.exports = {
    target: "serverless",
    images: {
        domains: [process.env.CLOUDINARY_URL],
    }
}