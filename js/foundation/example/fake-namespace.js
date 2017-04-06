var geek = geek || {};
(function() {
    var count = 0;
    function drinkCoffee() {
      console.log('drink coffee');
    }
    function reading(minute) {
      count += minute;
      console.log('reading ' + minute + ' minute');
    }
    function getReadTime() {
      return count;
    }
    function coding() {
      console.log('coding');
    }
    geek.drinkCoffee = drinkCoffee;
    geek.reading = reading;
    geek.getReadTime = getReadTime;
    geek.coding = coding;
})();

geek.reading(30);
geek.reading(15);
console.log(geek.getReadTime());