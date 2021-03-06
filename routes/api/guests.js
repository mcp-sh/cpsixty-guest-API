const express = require("express");
const router = express.Router();
const Guest = require("../../models/Guests");

// router.get("/", async (req, res) => {
//   const allGuests = await Guest.find().sort("-updatedAt").lean();
//   res.status(200).json(allGuests);
// });

router.get("/", async (req, res) => {
  const allGuests = await Guest.find({ cancelled: false })
    .sort({ "travelInfo.arrDate": 1 })
    .lean();
  res.status(200).json(allGuests);
});

router.get("/:guestID", async (req, res) => {
  const id = req.params.guestID;
  const guest = await Guest.findById(id).lean();
  res.status(200).json(guest);
});

router.patch("/:guestID", async (req, res) => {
  const {
    arrDate,
    depDate,
    numPax,
    numRooms,
    travelType,
    cancelled,
  } = req.body;
  const updInfo = {
    arrDate: arrDate,
    depDate: depDate,
    numPax: numPax,
    numRooms: numRooms,
    travelType: travelType,
  };
  const id = req.params.guestID;

  const guest = await Guest.findById(id);
  guest.travelInfo = { ...updInfo };
  guest.cancelled = cancelled;

  try {
    updateGuest = await guest.save();
    res.status(200).json(updateGuest);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { email, name } = req.body;

  const newGuest = new Guest({
    name: name,
    email: email,
  });
  await newGuest.save((err) => {
    if (!err) {
      res.status(200).json(newGuest);
    }
  });
});

module.exports = router;
