import prismaClient from "../../prisma";

interface HairCutRequest {
    user_id: string;
    name: string;
    price: number;
}

class CreateHaircutService {
    async execute({ user_id, name, price }: HairCutRequest) {
        if(!name || !price) {
            throw new Error("Error");
        }

        const myHaircuts = await prismaClient.haircut.count({
            where: {
                userId: user_id
            }
        });

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                subscriptions: true
            }
        });

        if(myHaircuts >= 3 && user?.subscriptions?.status !== "active") {
            throw new Error("Not authorized.");
        }

        const haircut = await prismaClient.haircut.create({
            data: {
                name: name,
                price: price,
                userId: user_id
            }
        });

        return haircut;
    }
}

export { CreateHaircutService }