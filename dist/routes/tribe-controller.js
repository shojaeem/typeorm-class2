"use strict";
// import { Express  } from "express";
// import { TribeEntity } from "../entities/tribe-entity";
// import { HeroService } from "../servies/hero-servies";
// import { TribeService, TribeService } from "../servies/tribe-servies";
//
// const router =express.Router();
// const TribeService= new TribeService();
// const heroService= new HeroService();
// router.post("/",async(req,res)=>{
//     const {name} =req.body;
//
//     const tribe=new TribeEntity();
//     tribe.name=name;
//     await TribeService.insert(tribe);
//     return res.json(tribe);
// });
// router.put("/:tribeId/new-hero/:heroId",async(req,res)=>{
//     const {tribeId,heroId}=req.params;
//     const tribe=await TribeService.find(parseInt(tribeId));
//
//     if(!tribe){
//     res.status(404).send("tribe not found ";)
//     }
//     const hero = heroService.find(parseInt(heroId));
//     if(!hero){
//     res.status(404).send("hero not found");
//     }
//     const updatedTribe = await tribeService.addHero(tribe, hero);
//
//     return res.json(updatedTribe);
// });
// export { router as TribeController };
