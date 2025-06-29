import mongoose from 'mongoose'

const { Schema } = mongoose

const SnoozeSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    expiry_time: { type: Date, required: true, index: true },
  },
  { strict: false }
)

const Snooze = mongoose.model('Snooze', SnoozeSchema)

// Snooze.deleteMany({}).then(() => {
//   console.log('Snooze collection cleared')
// })
export default Snooze
