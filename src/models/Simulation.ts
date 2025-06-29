import mongoose from 'mongoose'

const { Schema } = mongoose

const SimulationSchema = new Schema({}, { strict: false })

const Simulation = mongoose.model('Simulation', SimulationSchema)

export default Simulation
