import { Router, Request, Response } from "express";

//USER
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpadateUserController";

//HAIRCUT
import { CreateHairCutController } from "./controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "./controllers/haircut/ListHairCutController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// --- ROTAS USER ---
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/users', new UpdateUserController().handle);

// --- ROTAS HAIRCUT ---
router.post('/haircut', isAuthenticated, new CreateHairCutController().handle);
router.get('/haircuts', isAuthenticated, new ListHairCutController().handle);

export { router };