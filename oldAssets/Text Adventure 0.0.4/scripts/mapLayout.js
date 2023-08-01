//is its own script due to many types of maps
export default class MapLayout{
    constructor(){
        this.height = 0;
        this.width = 0;
        this.tileArray = [];
        this.generate(); //0: open-area, 1: wall, 2: player-spawn 
    }
    generate(){
        switch(Math.floor(Math.random()*5)){ 
            case 0: 
                this.height = 9;
                this.width = 9;
                this.tileArray = [
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 2, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 3, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1
                ];
                break;
            case 1:
                this.height = 9;
                this.width = 9;
                this.tileArray = [
                    1, 1, 1, 1, 0, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 1, 0, 0, 1,
                    1, 0, 1, 1, 0, 1, 1, 0, 1,
                    1, 0, 0, 0, 2, 0, 0, 0, 1,
                    1, 0, 1, 1, 0, 1, 1, 0, 1,
                    1, 0, 0, 1, 0, 1, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 3, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1
                ];
                break;
            case 2:
                this.height = 9;
                this.width = 9;
                this.tileArray = [
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 3, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 2, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1
                ];
                break;
            case 3:
                this.height = 9;
                this.width = 9;
                this.tileArray = [
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 2, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 3, 0, 0, 0, 0, 0, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1
                ];
                break;
            case 4:
                this.height = 9;
                this.width = 9;
                this.tileArray = [
                    1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 2, 0, 0, 0, 0, 0, 3, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1
                ];
                break;
            default:
                break;
        }
    }
}













