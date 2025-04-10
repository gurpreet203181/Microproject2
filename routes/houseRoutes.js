import express from 'express';
import { createHouse, getHouses } from '../controllers/houseController.js';
const router = express.Router();

router.post('/', createHouse);
router.get('/', getHouses);

export default router;
