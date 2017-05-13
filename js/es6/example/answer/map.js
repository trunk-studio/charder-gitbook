const arr = [{ id : 1, message: 'm1'}, { id : 2, message: 'm2'}, { id : 2, message: 'm2'}, { id : 2, message: 'm2'}];
var m = new Map();
m.set(1, arr[0]);

arr.forEach(function(item){
 m.set(item.id, item); 
});

m.get(1);
m.size