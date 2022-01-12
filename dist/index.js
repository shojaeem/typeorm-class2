"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const hero_entity_1 = require("./entities/hero-entity");
const Hero_controller_1 = require("./routes/Hero-controller");
const tribe_entity_1 = require("./entities/tribe-entity");
const war_entity_1 = require("./entities/war-entity");
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "19941373",
                extra: {
                    trustServerCertificate: true,
                },
                database: "nasser",
                synchronize: true,
                entities: [hero_entity_1.HeroEntity, tribe_entity_1.TribeEntity, war_entity_1.WarEntity],
            });
            console.log("database connected");
            app.use(express_1.default.json());
            app.use("/api/hero", Hero_controller_1.HeroController);
            // app.use("/api/tribe");
            app.listen(3000, () => console.log("Listening on port 3000"));
        }
        catch (e) {
            console.error(e);
            console.log("connection error");
        }
    });
}
main();
