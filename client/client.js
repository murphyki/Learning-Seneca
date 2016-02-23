require('seneca')()
  .client({"host": "localhost"})
  
  .add('say:hello', function (msg, respond){ respond(null, {text: "Hi!"}) }) // a local pattern
  
  .act('role:math,cmd:sum,left:1,right:2', console.log)
  
  .act('say:hello',console.log) // executed locally