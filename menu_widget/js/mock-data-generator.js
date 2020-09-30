class MockDataGenerator {

    menuDataArray = [];

    constructor() {

        try {
            this.menuDataArray = [];

            var menuData01 = {
                menuOrder: 0,
                menuTitle: "Hamburger Menu",
                menuImageUrl: "./assets/burger.png",
                menuContents: ["250 gr Hamburger Eti", "Patates", "5'li Soğan Halkası"],
                menuBackgroundColor : "rgb(226, 96, 21)",
                menuCost : "29,90"
            }


            var menuData02 = {
                menuOrder: 0,
                menuTitle: "Ton Balıklı Salata Menu",
                menuImageUrl: "./assets/salad.png",
                menuContents: ["Ton Balığı", "Akdeniz Yeşillikleri", "Kruton"],
                menuBackgroundColor : "rgb(40, 103, 185)",
                menuCost : "24,90"
            }

            var menuData03 = {
                menuOrder: 0,
                menuTitle: "Döner Wrap Menu",
                menuImageUrl: "./assets/doner.png",
                menuContents: ["Wrap Et Döner", "Yeşillikler", "Patates"],
                menuBackgroundColor : "rgb(240, 177, 12)",
                menuCost : "39,90"
            }

            var menuData04 = {
                menuOrder: 0,
                menuTitle: "Taco Menu",
                menuImageUrl: "./assets/burger.png",
                menuContents: ["Taco", "Patates", "Cola", "Yeşillikler", "Patates"],
                menuBackgroundColor : "rgb(226, 96, 21)",
                menuCost : "24,00"
            }

            var menuData05 = {
                menuOrder: 0,
                menuTitle: "Beef Menu",
                menuImageUrl: "./assets/burger.png",
                menuContents: ["Ton Balığı", "Patates", "Cola"],
                menuBackgroundColor : "rgb(240, 177, 12)",
                menuCost : "48,90"
            }


            this.menuDataArray.push(menuData01);
            this.menuDataArray.push(menuData02);
            this.menuDataArray.push(menuData03);
            this.menuDataArray.push(menuData04);
            this.menuDataArray.push(menuData05);


        } catch (exception) {}
    }
}

MockDataGenerator.prototype.constructor = MockDataGenerator;

//returns a random number between 0 and (menuDataArray.length)
MockDataGenerator.prototype.getRandomInt = function () {
    return Math.floor(Math.random() * (this.menuDataArray.length));
};

MockDataGenerator.prototype.fetchRandomObject = function () {

    var returnObject = 0;
    returnObject = this.menuDataArray[this.getRandomInt()];
    return returnObject;

};