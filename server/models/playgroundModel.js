import mongoose from 'mongoose';

const playgroundSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true,
      select: false // exclude this field from query results
    },
    longitude: {
      type: Number,
      required: true,
      select: false // exclude this field from query results
    },
    accessibilityFeatures: {
      type: [String],
      required: true
    },
    safetyFeatures: {
      type: [String],
      required: true
    },
    ageRange: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  });

  const Playground = mongoose.model('Playground', playgroundSchema);

  export default Playground;