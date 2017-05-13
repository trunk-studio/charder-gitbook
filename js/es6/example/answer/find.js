var users = [
  { id: 21, isLogin: true },
  { id: 62, isLogin: false },
  { id: 4, isLogin: true }
];

var answer = users.find(function(user){
  return user.isLogin;
});
console.log(answer);
// 如果有多筆，只會回傳一筆。