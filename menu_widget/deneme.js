
var menuDataArray = [];

var menuData01 = {
    menuOrder : 0,
    menuTitle : "Hamburger Menu",
    menuImageUrl : "./assets/burger.png",
    menuContents : [ "250 gr Hamburger Eti", "Patates", "5'li Soğan Halkası"],
    }


var menuData02 = {
    menuOrder : 0,
    menuTitle : "Ton Balıklı Salata Menu",
    menuImageUrl : "./assets/salad.png",
    menuContents : [ "Ton Balığı", "Akdeniz Yeşillikleri", "Kruton"],
}

var menuData03 = {
    menuOrder : 0,
    menuTitle : "Döner Wrap Menu",
    menuImageUrl : "./assets/doner.png",
    menuContents : [ "Wrap Et Döner", "Yeşillikler", "Patates"],
}

var menuData04 = {
    menuOrder : 0,
    menuTitle : "Taco Menu",
    menuImageUrl : "./assets/burger.png",
    menuContents : [ "Taco", "Patates", "Cola"],
}

var menuData05 = {
    menuOrder : 0,
    menuTitle : "Beef Menu",
    menuImageUrl : "./assets/burger.png",
    menuContents : [ "Ton Balığı", "Patates", "Cola"],
}


menuDataArray.push(menuData01);
menuDataArray.push(menuData02);
menuDataArray.push(menuData03);
menuDataArray.push(menuData04);
menuDataArray.push(menuData05);


class MockDataGenerator {

    constructor() {

        try {

            this.testMomentObject = moment();

            this.menuDataArray = menuDataArray;

        } catch (exception) {}
    }
}

MockDataGenerator.prototype.constructor = MockDataGenerator;

//returns a random number between 0 and (menuDataArray.length)
MockDataGenerator.prototype.getRandomInt = function () {
    Math.floor(Math.random() * (this.menuDataArray.length));
};

MockDataGenerator.prototype.fetchRandomObject = function () {

    var returnObject = 0;
    returnObject = this.menuDataArray[this.getRandomInt()];
    return returnObject;

};