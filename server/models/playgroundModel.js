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
    description: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
    }],
    accessibilityFeatures: [{
        type: String,
    }],
    safetyFeatures: [{
        type: String,
    }],
    ageRange: {
      type: String,
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