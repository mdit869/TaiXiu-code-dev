var container = document.getElementById('container');
var bodersarray = ['50%', '25%', '90%', '0']
var blursarray = ['0', '5px']
var colorarray = ['#ff6b6b', '#fff','red', 'pink', 'yellow','rgb(255, 0, 208)']
var width = document.documentElement.clientWidth
var height = document.documentElement.clientHeight
var count = 100;

function createElementRandom(){
  for(var i = 0; i < count; i++){
    var randomleft = Math.floor(Math.random()*width)
    var randomtop = Math.floor(Math.random()*height)
    var color = Math.floor(Math.random()*6)
    var boder = Math.floor(Math.random()*4)
    var blurs = Math.floor(Math.random()*2)
    var widthelement = Math.floor(Math.random()*5)+ 5
    var timeanimestion = Math.floor(Math.random()*10) + 5;


    var div = document.createElement('div')
    div.style.backgroundColor = colorarray[color]
    div.style.position = 'absolute'
    div.style.width = widthelement + 'px'
    div.style.height = widthelement + 'px'
    div.style.marginLeft = randomleft + 'px'
    div.style.marginTop = randomtop + 'px'
    div.style.borderRadius = bodersarray[boder]
    div.style.filter = 'blur(' + blursarray[blurs] +')'
    div.style.animation = 'move ' + timeanimestion+ 's ease-in infinite'

    container.appendChild(div)
  }
}
createElementRandom();