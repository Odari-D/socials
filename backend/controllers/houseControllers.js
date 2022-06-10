import asyncHandler from "express-async-handler";
import House from "../models/houseModel.js";

export const addHouse = asyncHandler(async (req, res) => {
  const house = req.body.newHouse;
  const dbHouse = new House({
    bathrooms: house.bathrooms,
    bedrooms: house.bedrooms,
    balcony: house.balcony,
    photos: house.photos,
  });

  dbHouse.save(function (err) {
    if (err) {
      console.log(dbHouse);
      res.json(err.message);
    } else {
      res.json({ message: "House uploaded successfully" });
    }
  });
});

export const getHouse = asyncHandler(async (req, res) => {
  const houses = await House.find();
  const src = houses[3].photos;
  res.send(src);
});
