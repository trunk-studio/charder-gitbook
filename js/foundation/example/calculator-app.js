var Calculator = {
    x: 0,
    y: 0,
    add: function(){
        return this.x + this.y;
    },
    sub: function(){
        return this.x - this.y;
    },
    mul: function(){
        return this.x * this.y;
    },
    division: function(){
        return this.x / this.y;
    }
};

var myApp = Object.create(Calculator);

myApp.x = 6;
myApp.y = 2;
myApp.add();
