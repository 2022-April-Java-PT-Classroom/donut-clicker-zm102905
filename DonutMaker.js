class DonutMaker {
//Constructor for Donut Maker.  
    constructor(onDonutCountChanged, onAutoClickerPurchased, onMultiplierPurchased) {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount=0;
        this.donutMultiplierCost = 10;
        this.autoClickerCost = 100;
//The next three are here to tell the browser when to update the "count" values in the DOM.
        this.onDonutCountChanged = onDonutCountChanged;
        this.onAutoClickerPurchased = onAutoClickerPurchased;
        this.onMultiplierPurchased = onMultiplierPurchased;
    }
    //Click function. This changes the donut count. Calculation for multipliers was included to account for the increase in value of each click for each multiplier purchased. The onDonutCountChanged function, will update the donut count every time it changes. 
    click() {
        this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
    //Tells the browser to update donut count.
        this.onDonutCountChanged();
    }

    //Getters. Applied Math.round to the donut count, so a whole number will be returned. 
    getDonutCount() {
        return Math.round(this.donutCount);
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }

    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
    //Needs to update donut count in the browser, because it changed when we subtracted the autoclicker cost. 
            this.onDonutCountChanged();
            this.autoClickerCount ++;
            this.autoClickerCost = (this.autoClickerCost * 1.1);
    //Tells browser to update the autoclicker count.
            this.onAutoClickerPurchased();    
        }
    }
    //Clicks for every autoclicker in the count.
    activateAutoClickers(){ 
        for (let i=0; i < this.autoClickerCount; i++) {
            this.click();
        }
    }

    canBuyAutoClicker() {
        return this.donutCount >= this.autoClickerCost;
    }

    canBuyMultiplier() {
        return this.donutCount >= this.donutMultiplierCost;
    }

    purchaseMultiplier() {
        if (this. donutCount >= this.donutMultiplierCost){
            this.donutCount -= this.donutMultiplierCost;
            this.onDonutCountChanged();
            this.donutMultiplierCount ++
            this.donutMultiplierCost = (this.donutMultiplierCost * 1.1);
            this.onMultiplierPurchased();
            
        }
    }

}




export default DonutMaker;