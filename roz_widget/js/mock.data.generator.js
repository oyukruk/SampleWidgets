class MockDataGenerator {

    constructor() {

        try {

            this.testMomentObject = moment();

            this.destinationArray = ['Milano', 'Istanbul', 'Toronto', 'Quebec'];
            this.statusArray = ['Delayed', 'On Time'];

        } catch (exception) {}
    }
}

MockDataGenerator.prototype.constructor = MockDataGenerator;

MockDataGenerator.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

MockDataGenerator.prototype.generateMockData = function (dataCount) {

    if (dataCount <= 0)
        return;

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16)
        });
    }

    var returnArray = [];

    for (var II = 0; II < dataCount; II++) {
        var mockData = {};

        mockData.id = II;
        mockData.scheduled = moment().add(this.getRandomInt(12), 'hours').format("hh:mm");
        mockData.flight = uuidv4().substring(0, 4);
        mockData.destination = this.fetchRandomData("destination");
        mockData.status = this.fetchRandomData("status");

        returnArray.push(mockData);
    }
    return returnArray;
};


MockDataGenerator.prototype.fetchRandomData = function (dataType) {



    switch (dataType) {
        case "destination": {
            return this.destinationArray[this.getRandomInt(this.destinationArray.length)];
        }
        break;
    case "status": {
        return this.statusArray[this.getRandomInt(this.statusArray.length)];
    }
    break;
    default: {
        return "";
    }
    break;
    }
};