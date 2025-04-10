import House from '../models/houseModel.js';

export const createHouse = async (req, res) => {
  try {
    const house = await House.create(req.body);
    res.status(201).json(house);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getHouses = async (req, res) => {
  try {
    const { location, type } = req.query;
    const filters = {};
    if (location) filters.location = location;
    if (type) filters.type = type;

    const houses = await House.find(filters);
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
