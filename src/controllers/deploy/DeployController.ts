import { Request, Response } from "express";
import { DeployService } from "../../services/deploy/DeployService";

class DeployController {
    async handle(request: Request, response: Response) {
        const service = new DeployService();
        const webhook = await service.execute();

        response.json(webhook);
    }
}

export { DeployController }