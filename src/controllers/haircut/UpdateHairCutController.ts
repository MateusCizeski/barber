import { Request, Response } from "express";
import { UpdateHairCutService } from "../../services/haircut/UpdateHairCutService";

class UpdateHairCutController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const { haircut_id, name, price, status } = request.body;

        const service = new UpdateHairCutService();
        const haircut = await service.execute({ user_id, haircut_id, name, price, status });

        return response.json(haircut);
    }
}

export { UpdateHairCutController }