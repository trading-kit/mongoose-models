import mongoose from 'mongoose'

const { Schema } = mongoose

const InsufficientSchema = new Schema({}, { strict: false })

//index on profit_per
// InsufficientSchema.index({ profit_per: 1 })

const Insufficient = mongoose.model('Insufficient', InsufficientSchema)

export default Insufficient
