import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: {
    type: String,
    enum: ['Detached', 'Semi-Detached', 'Condo', 'Townhouse','Cottage'],
    required: true
  },
  available: { type: Boolean, default: true },
  imageUrl: { type: String, required: true }  
}, { timestamps: true });

const House = mongoose.model('House', houseSchema);
export default House;
