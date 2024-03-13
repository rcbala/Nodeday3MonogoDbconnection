
import mongoose from 'mongoose';

const nodeSchema = new mongoose.Schema({
  // title: { type: String, required: true },
  // description: { type: String, required: true },
  // date: { type: Date, default: Date.now },
  image: { type: String }, // Store the image URL
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Node = mongoose.model('Node', nodeSchema);

export default Node;
