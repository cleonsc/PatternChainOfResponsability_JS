class CumulativeSum{
    constructor(initialValue = 0){
        this.sum = initialValue;
    }

    add(value){
        this.sum += value;
        return this;        
    }

    sub(value){
        this.sum -= value
        return this;
    }
}


//Usage

const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(10).sub(5).sum);

const sum2 = new CumulativeSum(10);
console.log(sum2.add(10).add(10).sub(8).sum);