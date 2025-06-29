import mongoose from 'mongoose'

const { Schema } = mongoose

const TickerSchema = new Schema({}, { strict: false })

//index on pair
TickerSchema.index({ pair: 1 })

//unique index on exchange and pair
TickerSchema.index({ exchange: 1, pair: 1 })

//index on EXCHANGEBASEASSET QUOTEASSET TIMESTAMP

TickerSchema.index({ exchange: 1, baseAsset: 1, quoteAsset: 1, timestamp: 1 })

const Ticker = mongoose.model('Ticker', TickerSchema)

export default Ticker
