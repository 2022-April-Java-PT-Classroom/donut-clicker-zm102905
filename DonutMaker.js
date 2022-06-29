class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount=1;
        this.donutMultiplierCost = 10;
        this.autoClickerCost = 100;
    }

    addToDonutCount() {
        this.donutCount ++;
    }

    getDonutCount() {
        return this.donutCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    addToAutoClickerCount() {
        if (this. donutCount >= this.authoClickerCost){
            this.autoClickerCount++
            this.donutCount -= this.autoClickerCost;
        }
    }

    


}