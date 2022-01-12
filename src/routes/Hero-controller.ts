import Express  from "express";
import { HeroEntity } from "../entities/hero-entity";
import { HeroService } from "../servies/hero-servies";

const router=Express.Router();
const heroService=new HeroService();
router.post("/",async(req,res)=>{
    const { name } = req.body;

    const hero = new HeroEntity();
    hero.name = name;
    await heroService.insert(hero);

    return res.json(hero);
});
export {router as HeroController};