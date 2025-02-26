import { Request, Response } from "express";
import { CreateHaircutService } from "../../services/haircut/CreateHairCutService";

class CreateHairCutController {
    async handle(request: Request, response: Response) {
        const { name, price } = request.body;
        const user_id = request.user_id;

        const service = new CreateHaircutService();
        const haircut = await service.execute({ user_id, name, price });

        return response.json(haircut);
    }
}

export { CreateHairCutController }