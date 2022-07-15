import {Router} from "express";
import {getAll, getUser, postUser, deleteUser, updateUser} from "../controllers/controllers.js";

const router = Router();

router.get('/getAll', getAll);
router.get('/getUser/:id', getUser);
router.post('/postUser', postUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router