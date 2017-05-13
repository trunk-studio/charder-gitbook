var users = [
  { id: 21, isLogin: true },
  { id: 62, isLogin: false },
  { id: 4, isLogin: true }
];

var answer = users.every(function(item) {
    return item.isLogin;
});
console.log(answer);