import express from 'express'
import { createConnection } from "typeorm";
import {HeroEntity} from "./entities/hero-entity";
import {HeroController} from "./routes/Hero-controller";
import {TribeEntity} from "./entities/tribe-entity";
import {WarEntity} from "./entities/war-entity";
import { TribeController } from './routes/tribe-controller';


const app = express();
app.use(express.json());
app.use("/api/hero", HeroController);
app.use("/api/tribe", TribeController);

async function main() {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port:5432 ,
      username: "postgres",
      password: "shjmry13",
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
      database:"typeorm",
      entities: [HeroEntity,TribeEntity,WarEntity],
    });
    app.listen(3000, () => console.log("Listening on port 3000"));
    console.log("database connected");
  }catch (e: any) {
    console.error(e);
    console.log("connection error");
  }
}

main();