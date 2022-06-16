class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text')
        };

        if (this.alarmCollection.some(item => item.id === id)) {
            return console.error("Такой звонок уже существует!")
        };

        this.alarmCollection.push({ time, callback, id })

    };

    removeClock(id) {
        let startLength = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);

        let finishLength = this.alarmCollection.length;

        return startLength > finishLength
    };

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, "0");
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        return (`${hours}:${minutes}`)
    };


    start() {
        if (this.timerId === undefined) {
            this.timerId = setInterval(this.checkClock, 1000)
        }
    };

    checkClock() {
        let timeNow = this.getCurrentFormattedTime();
        if (this.alarmCollection.forEach((item) => timeNow === item.time)) {
            return item.time
        }
    }

    stop() {
        if (this.timerId !== null) {
            return this.timerId = null
        };

        clearInterval(this.timerId);
    };

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((item) => console.log(`Будильник № ${item.id} заведен на ${item.time}`))
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = []
    }
}
