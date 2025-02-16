import { Request, Response } from "express";
import { DetailHairCutService } from "../../services/haircut/DetailHaircutService";

class DetailHairCutController {
    async handle(request: Request, response: Response) {
        const haircut_id = request.query.haircut_id as string;
        const service = new DetailHairCutService();

        const detail = await service.execute({ haircut_id });

        return response.json(detail);
    }
}

export { DetailHairCutController }