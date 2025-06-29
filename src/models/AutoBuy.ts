import mongoose from 'mongoose'
const { Schema } = mongoose

const AutoBuySchema = new Schema(
  {
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { strict: false }
)

//index on coin_completed_timestamp

AutoBuySchema.index({ coin: -1, completed: -1, timestamp: -1 })

const AutoBuy = mongoose.model('AutoBuy', AutoBuySchema, 'autoOn')

// AutoBuy.updateMany(
//   {},
//   {
//     $set: {
//       completed: true,
//     },
//   }
// ).then((x) => {
//   console.log('updated', x)
// })

export default AutoBuy
