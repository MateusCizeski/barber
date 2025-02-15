import prismaClient from "../../prisma";

interface HaircutRequest {
    user_id: string;
    status: boolean | string;
}

class ListHairCutService {
    async execute({ user_id, status }: HaircutRequest) {
        
        const hairCut = await prismaClient.haircut.findMany({
            where: {
                userId: user_id,
                status: status === 'true' ? true : false
            }
        });

        return hairCut;
    }
}

export { ListHairCutService };