import mongoose from 'mongoose'
const { Schema } = mongoose

const ConfigSchema = new Schema({
  app: {
    type: String,
    required: true,
  },
  mmLossAlertTime: Number
}, { strict: false })

const Config = mongoose.model('Config', ConfigSchema, 'config')

export default Config
