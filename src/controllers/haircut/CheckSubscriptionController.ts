import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const service = new CheckSubscriptionService();

        const status = await service.execute({ user_id });

        return response.json(status);
    }
}

export { CheckSubscriptionController }