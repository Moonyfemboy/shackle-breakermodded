import {Slash, Stab, Eviscerate, Block, Fireball, Channel, DrinkHealthPotion, DrinkStaminaPotion, DrinkMagicPotion, ThrowKnife, ThrowPoisonedKnife, SmashMeteorite} from "./abilities.js"

export function getRandomItem(){
    let itemArray = [new LinenShirt(), new LinenPants, new WoodDagger, new WoodSpear, new WoodSword, 
                new WoodSideDagger, new WoodSheild, new WoodFireStaff, new LeatherHelmet, 
                new LeatherHood, new LeatherGloves, new LeatherChestplate, new LeatherGreaves, 
                new LeatherBoots, new IronSheild, new IronHelmet, new IronGuantlets, new IronChainmail, 
                new IronGreaves, new IronBoots, new HealthPotion, new StaminaPotion, new MagicPotion, 
                new ThrowingKnife, new PoisonedThrowingKnife, new Meteorite];
                return itemArray[Math.floor(Math.random() * itemArray.length)];
    }
export class LinenShirt {
    constructor(){
        this.name = "linen shirt";
        this.type = "torso";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 1;
        this.pierceDefense = 1;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = 0;
        this.abilityArray = [];
    }
}
export class LinenPants {
    constructor(){
        this.name = "linen pants";
        this.type = "legs";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 1;
        this.pierceDefense = 1;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = 0;
        this.abilityArray = [];
    }
}
export class WoodDagger {
    constructor(){
        this.name = "wood dagger";
        this.type = "weapon";
        this.level = 0;
        this.bluntAttack = 1;
        this.pierceAttack = 2;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 0;
        this.pierceDefense = 0;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = 4;
        this.abilityArray = [new Stab(), new Slash()];
    }
}
export class WoodSpear {
    constructor(){
        this.name = "wood spear";
        this.type = "weapon";
        this.level = 0;
        this.bluntAttack = 2;
        this.pierceAttack = 4;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 0;
        this.pierceDefense = 0;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = 1;
        this.abilityArray = [new Stab()];
    }
}
export class WoodSword {
    constructor(){
        this.name = "wood sword";
        this.type = "weapon";
        this.level = 0;
        this.bluntAttack = 3;
        this.pierceAttack = 3;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 0;
        this.pierceDefense = 0;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = 2;
        this.abilityArray = [new Stab(), new Slash()];
    }
}
export class WoodSideDagger {
    constructor(){
        this.name = "wood side dagger";
        this.type = "offhand";
        this.level = 0;
        this.bluntAttack = 1;
        this.pierceAttack = 1;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 0;
        this.pierceDefense = 0;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = 1;
        this.abilityArray = [new Eviscerate];
    }
}
export class WoodSheild {
    constructor(){
        this.name = "wood sheild";
        this.type = "offhand";
        this.level = 0;
        this.bluntAttack = 1;
        this.pierceAttack = 2;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 1;
        this.pierceDefense = 1;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = -1;
        this.abilityArray = [new Block()];
    }
}
export class WoodFireStaff {
    constructor(){
        this.name = "wood fire staff";
        this.type = "weapon";
        this.level = 0;
        this.bluntAttack = 1;
        this.pierceAttack = 0;
        this.arcaneAttack = 1;
        this.elementalAttack = 3;
        this.bluntDefense = 0;
        this.pierceDefense = 0;
        this.arcaneDefense = 0;
        this.elementalDefense = 0;
        this.speed = 1;
        this.abilityArray = [new Fireball(), new Channel()];
    }
}
export class LeatherHelmet {
    constructor(){
        this.name = "leather helmet";
        this.type = "head";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 2;
        this.pierceDefense = 2;
        this.arcaneDefense = 1;
        this.elementalDefense = 2;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class LeatherHood {
    constructor(){
        this.name = "leather hood";
        this.type = "head";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 1;
        this.pierceDefense = 1;
        this.arcaneDefense = 1;
        this.elementalDefense = 3;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class LeatherGloves {
    constructor(){
        this.name = "iron gloves";
        this.type = "arms";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 2;
        this.pierceDefense = 2;
        this.arcaneDefense = 1;
        this.elementalDefense = 2;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class LeatherChestplate {
    constructor(){
        this.name = "leather chestplate";
        this.type = "torso";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 2;
        this.pierceDefense = 2;
        this.arcaneDefense = 1;
        this.elementalDefense = 2;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class LeatherGreaves {
    constructor(){
        this.name = "leather greaves";
        this.type = "legs";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 2;
        this.pierceDefense = 2;
        this.arcaneDefense = 1;
        this.elementalDefense = 2;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class LeatherBoots {
    constructor(){
        this.name = "leather boots";
        this.type = "feet";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 2;
        this.pierceDefense = 2;
        this.arcaneDefense = 1;
        this.elementalDefense = 2;
        this.speed = 1;
        this.abilityArray = [];
    }
}
export class IronSheild {
    constructor(){
        this.name = "iron sheild";
        this.type = "offhand";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [new Block()];
    }
}
export class IronHelmet {
    constructor(){
        this.name = "iron helmet";
        this.type = "head";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [];
    }
}
export class IronGuantlets {
    constructor(){
        this.name = "iron guantlets";
        this.type = "arms";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [];
    }
}
export class IronChainmail {
    constructor(){
        this.name = "iron chainmail";
        this.type = "torso";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [];
    }
}
export class IronGreaves {
    constructor(){
        this.name = "iron greaves";
        this.type = "legs";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [];
    }
}
export class IronBoots {
    constructor(){
        this.name = "iron boots";
        this.type = "feet";
        this.level = 0;
        this.bluntAttack = 0;
        this.pierceAttack = 0;
        this.arcaneAttack = 0;
        this.elementalAttack = 0;
        this.bluntDefense = 4;
        this.pierceDefense = 4;
        this.arcaneDefense = 1;
        this.elementalDefense = 1;
        this.speed = -1;
        this.abilityArray = [];
    }
}
export class HealthPotion {
    constructor(){
        this.name = "healing potion";
        this.type = "consumable";
        this.abilityArray = [new DrinkHealthPotion];
    }
}

export class StaminaPotion {
    constructor(){
        this.name = "stamina potion";
        this.type = "consumable";
        this.abilityArray = [new DrinkStaminaPotion];
    }
}

export class MagicPotion {
    constructor(){
        this.name = "magic potion";
        this.type = "consumable";
        this.abilityArray = [new DrinkMagicPotion];
    }
}

export class ThrowingKnife {
    constructor(){
        this.name = "throwing knife";
        this.type = "consumable";
        this.level = 0;
        this.abilityArray = [new ThrowKnife];
    }
}
export class PoisonedThrowingKnife {
    constructor(){  
        this.name = "poisoned throwing knife";
        this.type = "consumable";
        this.level = 0;
        this.abilityArray = [new ThrowPoisonedKnife];
    }
}
export class Meteorite {
    constructor(){
        this.name = "meteorite";
        this.type = "consumable";
        this.level = 0;
        this.abilityArray = [new SmashMeteorite];
    }
}