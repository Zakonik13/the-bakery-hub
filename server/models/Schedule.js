const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema({
  sundayAM: { type: String },
  sundayPM: { type: String },
  mondayAM: { type: String },
  mondayPM: { type: String },
  tuesdayAM: { type: String },
  tuesdayPM: { type: String },
  wednesdayAM: { type: String },
  wednesdayPM: { type: String },
  thursdayAM: { type: String },
  thursdayPM: { type: String },
  fridayAM: { type: String },
  fridayPM: { type: String },
  saturdayAM: { type: String },
  saturdayPM: { type: String },
});

const Schedule = model("Schedule", scheduleSchema);

module.exports = Schedule;
