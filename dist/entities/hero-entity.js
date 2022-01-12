"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroEntity = void 0;
const typeorm_1 = require("typeorm");
const tribe_entity_1 = require("./tribe-entity");
let HeroEntity = class HeroEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HeroEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeroEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tribe_entity_1.TribeEntity, (tribe) => tribe.heroes),
    (0, typeorm_1.JoinColumn)({
        name: "tribeId",
    }),
    __metadata("design:type", tribe_entity_1.TribeEntity)
], HeroEntity.prototype, "relatedTribe", void 0);
HeroEntity = __decorate([
    (0, typeorm_1.Entity)('Hero')
], HeroEntity);
exports.HeroEntity = HeroEntity;
