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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TribeService = void 0;
const tribe_entity_1 = require("../entities/tribe-entity");
class TribeService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const Tribe = tribe_entity_1.TribeEntity.create(data);
            yield Tribe.save();
            return Tribe;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tribe = yield tribe_entity_1.TribeEntity.findOne(id);
            return tribe;
        });
    }
    addHero(tribe, hero) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(tribe.heroes);
            if (tribe.heroes != undefined) {
                console.log("if1", tribe.heroes);
                tribe.heroes.push(hero);
            }
            else {
                tribe.heroes = [hero];
            }
            yield tribe.save();
            return tribe;
        });
    }
}
exports.TribeService = TribeService;
