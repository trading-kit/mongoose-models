import mongoose from 'mongoose'

const { Schema } = mongoose

const OrderSchema = new Schema({
  source: {
    type: String,
    required: true,
  }
}, { strict: false })

const Order = mongoose.model('Order', OrderSchema)

export default Order
