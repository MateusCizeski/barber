import { Request, Response } from "express";
import { CountHairCutsService } from "../../services/haircut/CountHairCutsService";

class CountHairCutsController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const service = new CountHairCutsService();

        const count = await service.execute({ user_id });

        return response.json(count);
    }
}

export { CountHairCutsController }