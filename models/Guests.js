const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, lowercase: true },
    langDe: { type: Boolean, default: true },
    comment: { type: String, default: "" },
    travelInfo: {
      arrDate: { type: Date, default: Date.now() },
      depDate: { type: Date, default: Date.now() },
      numPax: { type: Number, default: 0 },
      numRooms: { type: Number, default: 0 },
      travelType: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = Guest = mongoose.model("guest", guestSchema);
