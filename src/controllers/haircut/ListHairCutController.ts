import { Request, Response } from "express";
import { ListHairCutService } from "../../services/haircut/ListHairCutService";

class ListHairCutController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const status = request.query.status as string;

        const service = new ListHairCutService();
        const hairCuts = await service.execute({ user_id, status });

        return response.json(hairCuts);
    }
}

export { ListHairCutController }