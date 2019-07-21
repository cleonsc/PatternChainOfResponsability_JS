class MeterCheck {
    constructor(meter) {
        this.meter = meter;
    }

    checkClear() {
        for (const prop in this.meter) {
            if (prop !== 'status') {
                if (this.meter[prop] == 0) {
                    this.meter['status'] = 'clear';
                } else {
                    this.meter['status'] = 'normal';
                }
            }

        }
        return this;
    }

    checkRollback(meterAnt) {
        for (const prop in this.meter) {
            if (prop !== 'status') {
                if (this.meter[prop] > meterAnt[prop]) {
                    this.meter['status'] = 'rollback';
                } else {
                    this.meter['status'] = 'normal';
                }
            }

        }
        return this;
    }
}

/* const meter1 = new MeterCheck({
    a: 0,
    b: 1,
    "status": 0
})
meter1.checkClear()
console.log(meter1.meter); */


const meter2 = new MeterCheck({
    a: 0,
    b: 0,
    "status": 0
})

meter2.checkClear();/* .checkRollback({
    a: 0,
    b: 0,
    "status": 0
})
 */
console.log(meter2.meter);