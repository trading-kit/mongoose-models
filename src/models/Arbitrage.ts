import mongoose from 'mongoose'
const { Schema } = mongoose

const ArbitrageSchema = new Schema({}, { strict: false })

//index on profit_per
ArbitrageSchema.index({ profit_per: 1 })

const Arbitrage = mongoose.model('Arbitrage', ArbitrageSchema)

export default Arbitrage
