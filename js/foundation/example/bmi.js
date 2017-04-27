var BMICalculator = {
    height: 0,
    weight: 0,
    getBMI: function(){
        return this.weight / Math.pow((this.height / 100), 2);
    },
    getAdvice: function(){
        var bmi = this.getBMI();
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

myApp.height = 155;
myApp.weight = 52;
myApp.getBMI();