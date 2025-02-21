import { Router, Request, Response } from "express";

//USER
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpadateUserController";

//HAIRCUT
import { CreateHairCutController } from "./controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "./controllers/haircut/ListHairCutController";
import { UpdateHairCutController } from "./controllers/haircut/UpdateHairCutController";
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController";
import { CountHairCutsController } from "./controllers/haircut/CountHairCutController";
import { DetailHairCutController } from "./controllers/haircut/DetailHairCutController";

//SCHEDULE
import { NewScheduleController } from "./controllers/schedule/NewScheduleController";
import { ListScheduleController } from "./controllers/schedule/ListScheduleController";
import { FinishScheduleController } from "./controllers/schedule/FinishScheduleController";

//DEPLOY
import { DeployController } from "./controllers/deploy/DeployController";

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
router.put('/haircut', isAuthenticated, new UpdateHairCutController().handle);
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated, new CountHairCutsController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHairCutController().handle);

// --- ROTAS SCHEDULE / SERVICES ---
router.post('/schedule', isAuthenticated, new NewScheduleController().handle);
router.get('/schedule', isAuthenticated, new ListScheduleController().handle);
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle);

// --- DEPLOY ---
router.post("/github-webhook", new DeployController().handle);

export { router };