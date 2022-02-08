const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    fuelType: {
      type: String,
      required: true,
    },
    bookedTimeSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],
    rentPerHour: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Car = mongoose.model('car', CarSchema);
