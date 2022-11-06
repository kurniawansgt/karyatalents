import express from "express";
import {
    getDataAll,
    getDataById,
    createRegistration,
    updateRegistration,
    hapusData
} from "../controllers/Registration.js";
 
const router = express.Router();
 
router.get('/registration', getDataAll);
router.get('/registration/:id', getDataById);
router.post('/registration', createRegistration);
router.put('/registration/:id', updateRegistration);
router.delete('/registration/:id', hapusData);
 
export default router;