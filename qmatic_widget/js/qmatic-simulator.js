class QMaticSimulator {

    tabDataArray = [];
    boothCount = 1;
    newQueueCallback = 0;
    newQueueInterval = 1000;
    timerId = 0;

    lastQueueNo = 0;



    constructor(_boothCount, _newQueueInterval, _newQueueCallback) {

        try {
            this.boothCount = _boothCount;
            this.newQueueCallback = _newQueueCallback;
            this.newQueueInterval = _newQueueInterval;


        } catch (exception) {}
    }
}

        //string'den tekrar geri objeye çevirmek için:
        //var momentObject = moment("28.07.1990 13:00:00","DD.MM.YYYY HH:mm:ss");

        //var tarih1 = moment();
        //var tarih2 = moment();
        //var isAfter = tarih1.isAfter(tarih2); //bool true/false

QMaticSimulator.prototype.constructor = QMaticSimulator;

QMaticSimulator.prototype.newQueueTick = function(){

    this.lastQueueNo++;

    //yeni queueData üretirken,
    //gişe numarasını aldığımız max gişe sayısı kadar (boothcount) limit verip randomize edelim
    //sıra numaramızı da, en son oluşturduğumuz queuenumber + 1 olarak her seferinde arttıralım.
    
    var newQueueData = {};

    newQueueData.queueNo = this.lastQueueNo;
    newQueueData.boothNo = Math.floor(Math.random() * (this.boothCount)+1); //randomized


    newQueueData.callTime = moment().format("DD.MM.YYYY HH:mm:ss");

    if (typeof this.newQueueCallback === "function") {
        this.newQueueCallback(newQueueData)
    }

}

//returns a random number between 0 and (tabDataArray.length)
QMaticSimulator.prototype.start = function () {


    //eğer timer zaten aktif ise, önceki timerı durdur
    //yoksa simultane bir şekilde paralelde bir sürü timer çalışır.
    if(this.timerId !== 0)
    {
        clearInterval(this.timerId);
        this.timerId = 0;
    }


    console.log("QMatic Simulator started");
    this.timerId = setInterval(this.newQueueTick.bind(this),this.newQueueInterval);
};