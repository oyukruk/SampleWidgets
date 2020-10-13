class MockDataGenerator {

    tabDataArray = [];

    constructor() {

        try {
            this.tabDataArray = [];

            var tabData01 = {
                tabOrder: 0,
                tabBooth: "4",
                tabBackgroundColor : "rgb(190, 157, 252)",
                tabQNum : "65"
            }


            var tabData02 = {
                tabOrder: 0,
                tabBooth: "6",
                tabBackgroundColor : "rgb(57, 55, 187)",
                tabQNum : "22"
            }

            var tabData03 = {
                tabOrder: 0,
                tabBooth: "3",
                tabBackgroundColor : "rgb(252, 168, 157)",
                tabQNum : "14"
            }

            var tabData04 = {
                tabOrder: 0,
                tabBooth: "7",
                tabBackgroundColor : "rgb(150, 191, 207)",
                tabQNum : "99"
            }

            var tabData05 = {
                tabOrder: 0,
                tabBooth: "1",
                tabBackgroundColor : "rgb(179, 173, 177)",
                tabQNum : "102"
            }


            this.tabDataArray.push(tabData01);
            this.tabDataArray.push(tabData02);
            this.tabDataArray.push(tabData03);
            this.tabDataArray.push(tabData04);
            this.tabDataArray.push(tabData05);


        } catch (exception) {}
    }
}

MockDataGenerator.prototype.constructor = MockDataGenerator;

//returns a random number between 0 and (tabDataArray.length)
MockDataGenerator.prototype.getRandomInt = function () {
    return Math.floor(Math.random() * (this.tabDataArray.length));
};

MockDataGenerator.prototype.fetchRandomObject = function () {

    var returnObject = 0;
    returnObject = this.tabDataArray[this.getRandomInt()];
    return returnObject;

};