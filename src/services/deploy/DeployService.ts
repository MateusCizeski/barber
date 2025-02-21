import { exec } from "child_process";

class DeployService {
    private secret: string;

    constructor() {
        this.secret = process.env.GITHUB_WEBHOOK_SECRET || "";
    }
    async execute() {
        return new Promise((resolve, reject) => {
            exec("sh /home/ubuntu/barber.sh", (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    console.error(stderr);
                    return reject("Erro no deploy.");
                }
                console.log(stdout);
                resolve("Deploy iniciado com sucesso!");
            });
        });
    }
}

export { DeployService }