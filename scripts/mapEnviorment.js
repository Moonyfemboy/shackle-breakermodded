import {LockedTreasureChest, UnlockedTreasureChest, AltusAmbushOpportunity, MysteriousDoor, TravelingMerchant, AbandonedCabin, SuspiciousSkeleton, Robbery, Avalanche} from "./encounters.js";
import {Skeleton, Bat, Wolf, AltusMage, CaveSpider, Groveguardian, EmperorDolos, ShadowStrider, TerrorBear, Bandit} from "./enemies.js";

export default class MapEnviorment{
    constructor(biome){
        this.biome = "";
        this.imageSrc = "";
        this.backgroundMusicSrc = "";
        this.terrain = new Image();
        this.terrain.src = "media/terrain/terrain.png";
        this.frameCoordinates = [[]];
        this.generateBiome(biome);
    }
    generateBiome(biome){
        switch(biome){ 
            case "basic": 
                switch(Math.floor(Math.random()*4)){ 
                    case 0: 
                        this.biome = "cave";
                        this.imageSrc = "media/cave.jpg";
                        this.backgroundMusicSrc = "./audio/gathering-darkness-kevin-macleod-main-version-04-22-8459.mp3";
                        this.frameCoordinates = [
                            [3],
                            [3]
                        ];
                        break;
                    case 1:
                        this.biome = "forest";
                        this.imageSrc = "media/forest.jpg";
                        this.backgroundMusicSrc = "./audio/deep-in-the-dell-126916.mp3";
                        this.frameCoordinates = [
                            [0,1],
                            [0,1]
                        ];
                        break;
                    case 2:
                        this.biome = "plains";
                        this.imageSrc = "media/plains.jpg";
                        this.backgroundMusicSrc = "./audio/the-epical-trailer-158083.mp3";
                        this.frameCoordinates = [
                            [0,2],
                            [0,1,2]
                        ];
                        break;
                    case 3:
                        this.biome = "mountain";
                        this.imageSrc = "media/mountain.jpg";
                        this.backgroundMusicSrc = "./audio/achievement-philip-anderson-main-version-01-31-13804.mp3";
                        this.frameCoordinates = [
                            [0,2],
                            [2]
                        ];
                        break;
                    default:
                        break;
                }
                break;
            case "portal":
                switch(Math.floor(Math.random()*2)){ 
                    case 0: 
                        this.biome = "twilight realm";
                        this.imageSrc = "media/twilight-realm.jpg";
                        this.backgroundMusicSrc = "./audio/gathering-darkness-kevin-macleod-main-version-04-22-8459.mp3";
                        this.frameCoordinates = [
                            [3],
                            [3]
                        ];
                        break;
                    case 1:
                        this.biome = "ancient altus ruins";
                        this.imageSrc = "media/ancient-altus-ruins.jpg";
                        this.backgroundMusicSrc = "./audio/gathering-darkness-kevin-macleod-main-version-04-22-8459.mp3";
                        this.frameCoordinates = [
                            [3],
                            [3]
                        ];
                        break;
                    default:
                        break;
                }
                break;
            case "altas castle":
                this.biome = "altas castle";
                        this.imageSrc = "media/altas-castle-interior.jpg";
                        this.backgroundMusicSrc = "./audio/gathering-darkness-kevin-macleod-main-version-04-22-8459.mp3";
                        this.frameCoordinates = [
                            [3],
                            [3],
                            [0],
                            [0],
                            [0]
                        ];
            default:
                break;
        }
    }
    generateEnemy(currentCharacterLevel, isBoss){
        switch(this.biome){ 
            case "cave": 
                switch(Math.floor(Math.random()*3)){ 
                    case 0:
                        return new CaveSpider(currentCharacterLevel);
                    case 1:
                        return new Bat(currentCharacterLevel);
                    case 2:
                        return new Skeleton(currentCharacterLevel);
                    default:
                        return;
                }
            case "forest":
                switch(Math.floor(Math.random()*4)){ 
                    case 0:
                        return new Bat(currentCharacterLevel);
                    case 1:
                        return new Wolf(currentCharacterLevel);
                    case 2:
                        return new Groveguardian(currentCharacterLevel);
                    case 3:
                        return new Bandit(currentCharacterLevel);
                    default:
                        return;
                }
            case "plains":
                switch(Math.floor(Math.random()*4)){ 
                    case 0:
                        return new Skeleton(currentCharacterLevel);
                    case 1:
                        return new Wolf(currentCharacterLevel);
                    case 2:
                        return new AltusMage(currentCharacterLevel);
                    case 3:
                        return new Bandit(currentCharacterLevel);
                    default:
                        return;
                }
            case "mountain":
                switch(Math.floor(Math.random()*3)){ 
                    case 0:
                        return new Skeleton(currentCharacterLevel);
                    case 1:
                        return new Wolf(currentCharacterLevel);
                    case 2:
                        return new AltusMage(currentCharacterLevel);
                    default:
                        return;
                }
            case "twilight realm":
                switch(Math.floor(Math.random()*2)){ 
                    case 0:
                        return new ShadowStrider(currentCharacterLevel);
                    case 1:
                        return new TerrorBear(currentCharacterLevel);
                    default:
                        return;
                }
            case "ancient altus ruins":
                switch(Math.floor(Math.random()*2)){ 
                    case 0:
                        return new Skeleton(currentCharacterLevel);
                    case 1:
                        return new Bat(currentCharacterLevel);
                    default:
                        return;
                }
            case "altas castle":
                if(isBoss == true){
                    return new EmperorDolos(currentCharacterLevel);
                }
                switch(Math.floor(Math.random()*2)){ 
                    case 0:
                        return new AltusMage(currentCharacterLevel);
                    case 1:
                        return new Bat(currentCharacterLevel);
                    default:
                        return;
                }
            default:
                break;
        }
    }
    generateEncounter(){
        switch(this.biome){ 
            case "cave": 
                switch(Math.floor(Math.random()*3)){ 
                    case 0:
                        return new LockedTreasureChest();
                    case 1:
                        return new MysteriousDoor();
                    case 2:
                        return new SuspiciousSkeleton();
                    default:
                        return;
                }
            case "forest":
                switch(Math.floor(Math.random()*4)){ 
                    case 0:
                        return new LockedTreasureChest();
                    case 1:
                        return new TravelingMerchant();
                    case 2:
                        return new AbandonedCabin();
                    case 3:
                        return new Robbery();
                    default:
                        return;
                }
            case "plains":
                switch(Math.floor(Math.random()*4)){ 
                    case 0:
                        return new LockedTreasureChest();
                    case 1:
                        return new AltusAmbushOpportunity();
                    case 2:
                        return new TravelingMerchant();
                    case 3:
                        return new Robbery();
                    default:
                        return;
                }
            case "mountain":
                switch(Math.floor(Math.random()*4)){ 
                    case 0:
                        return new Robbery();
                    case 1:
                        return new Avalanche();
                    case 2:
                        return new TravelingMerchant();
                    case 3:
                        return new MysteriousDoor();
                    default:
                        return;
                }
            case "twilight realm":
                switch(Math.floor(Math.random()*2)){ 
                    case 0:
                        return new LockedTreasureChest();
                    case 1:
                        return new UnlockedTreasureChest();
                    default:
                        return;
                }
            case "ancient altus ruins":
                switch(Math.floor(Math.random()*2)){ 
                    case 0:
                        return new LockedTreasureChest();
                    case 1:
                        return new SuspiciousSkeleton();
                    default:
                        return;
                }
            default:
                break;
        }
    }
}