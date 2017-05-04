var BMICalculator = {
    height: 0,
    weight: 0,
    bmi: 0,
    calc(height = 155, weight = 40){
        this.height = height;
        this.weight = weight;
        this.bmi = this.weight / Math.pow((this.height / 100), 2);
    },
    getBMI(){
        return this.bmi;
    },
    getAdvice({firstname, lastname}){
        var bmi = this.bmi;
        console.log(firstname, lastname);
        if (bmi < 18.5) {
            console.log('體重過輕');
        } else if(18.5 <= bmi && bmi < 24) {
            console.log('正常範圍');
        } else {
            console.log('異常範圍');
        }
    }
};

var myApp = Object.create(BMICalculator);
myApp.calc(155, 52);
myApp.getBMI();
myApp.getAdvice({firstname: 'ailin', lastname: 'liou'});