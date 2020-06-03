function forEach ;






repeat(5, function(i) {
    unless(i % 2, function(){
        console.log(i)
    })
})
function repeat(times, action) {
  for (var i = 0; i < times; i++) {
      action(i)
  }
}

function unless(cond, action) {
  if (!cond) {
      action()
  }
}