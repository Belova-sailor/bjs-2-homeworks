class AlarmClock {
    constructor(alarmCollection = [], timerId) {
        this.alarmCollection = alarmCollection;
        this.timerId = timerId
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text')
        } else {
            this.alarmCollection.filter(item => {
                if (item.id === this.id) {
                    return console.error()
                } else {
                    return item.id
                }
            });

            return this.alarmCollection.push({ time, callback, id })
        }
    };

    removeClock(id) {
        let startLength = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(item => {
            if (item.id !== id) {
                return item.id
            }
        });

        let finishLength = this.alarmCollection.length;

        return startLength > finishLength ? true : false
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
        };
    };

    checkClock(callback) {
        let timeNow = this.getCurrentFormattedTime;
        this.alarmCollection.forEach((item) => {
            if (timeNow === item.time) {
                callback()
            }
        })
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval();
            this.timerId = null
        }
    };

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((item) => {
            console.log(`Будильник № ${item.id} заведен на ${item.time}`)
        })
    };

    clearAlarms() {
        clearInterval();
        this.alarmCollection = []
    }
}

const test = new AlarmClock();
console.log(test.addClock("16:45", f => f, 1));
console.log(test.addClock("10:45", f => f, 2));
console.log(test.addClock("10:45", f => f, 2));
console.log(test.removeClock("16:45", f => f, 1));
console.log(test.getCurrentFormattedTime());
console.log(test.start());
test.printAlarms();
test.start()
