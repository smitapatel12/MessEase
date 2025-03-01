const mongoose = require('mongoose');

const Hostels = [
  "Sarojini Bhawan",
  "Sarswati Bhawan",
  "Kalpana Bhawan",
  "Kastorba Bhawan",
  "New Girls Hostel",
];

const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MessMenuSchema = new mongoose.Schema({
  hostel: {
    type: String,
    enum: Hostels,
    required: true
  },
  breakfast: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  lunch: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  dinner: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  supper: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ]
});

const MessMenu = mongoose.model("MessMenu", MessMenuSchema);

module.exports = MessMenu;
