import mongoose from 'mongoose'

const GolfClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export default mongoose.models.GolfClub ||
  mongoose.model('GolfClub', GolfClubSchema)
