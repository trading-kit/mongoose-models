import mongoose from 'mongoose'
const { Schema } = mongoose

const AlertSchema = new Schema({}, { strict: false })

const Alert = mongoose.model('Alert', AlertSchema)

export default Alert
