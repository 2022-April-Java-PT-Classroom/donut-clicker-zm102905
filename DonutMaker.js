class DonutMaker {

    constructor(donutCount, autoClicker, donutMultiplier) {
        this.donutCount = 0;
        this.autoClicker = 0;
        this.donutMultiplier=1;
        this.donutMultiplierCost = 10;
        this.autoClickerCost = 100;
    }

    addToDonutCount() {
        this.donutCount += Math.pow(1.2, this.donutMultiplier);
    }
}