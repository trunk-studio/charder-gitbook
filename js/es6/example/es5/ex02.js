var BMICalculator = {
    height: 0,
    weight: 0,
    bmi: 0,
    calc: function(height, weight){
        this.height = height || 155;
        this.weight = weight || 40;
        this.bmi = this.weight / Math.pow((this.height / 100), 2);
    },
    getBMI: function(){
        return this.bmi;
    },
    getAdvice: function(user){
        var bmi = this.bmi;
        var firstname = user.firstname;
        var lastname = user.lastname;
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