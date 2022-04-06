import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

const PORT = process.env.PORT ?? 3000;

createConnection().then(() => {
    console.log("Database connected.")
    app.listen(PORT, () => {
        console.log(`run app in port: ${PORT}`)
    })
}).catch((err: any) => console.log(err));