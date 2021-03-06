'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const opts = { toJSON : { virtuals: true } };

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    unique: true
  },
  exercises: []
}, opts);

WorkoutSchema.virtual(`totalDuration`).get(function() {
  return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
});

const Workout = mongoose.model(`Workout`, WorkoutSchema);

module.exports = Workout;
