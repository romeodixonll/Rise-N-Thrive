const { Schema, model } = require("mongoose");

const statSchema = new Schema({
  userId: {
    type: String,
  },
  highScore: {
    type: Number,
    required: true,
    default: 0
  },
  guess1: {
    type: Number,
    default: 0
  },
  guess2: {
    type: Number,
    default: 0
  },
  guess3: {
    type: Number,
    default: 0
  },
  guess4: {
    type: Number,
    default: 0
  },
  guess5: {
    type: Number,
    default: 0
  },
  guess6: {
    type: Number,
    default: 0
  },
  guess7: {
    type: Number,
    default: 0
  },
  guess8: {
    type: Number,
    default: 0
  },
  averageTries: {
      type: Number,
      default: 0
  },
  gamesPlayed: {
    type: Number,
    default: 0
  },
});

const Stat = model("Stat", statSchema, "Stat");

module.exports = Stat;
