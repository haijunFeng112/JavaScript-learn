var arr = [0,1,2,3,4,5,6,7,8,9]
for(var i = 65; i <123;i++){
	if(i >90 && i <97){
		continue;
	}
	arr.push(String.fromCharCode(i))
}
// console.log(arr)
var value
function createCanvas(){
	//验证码字符串
	var canvasStr = '';
	value = ''
	for(var i =0;i < 6;i++){
		var a = arr[Math.floor(Math.random() * arr.length)];
		canvasStr += a +' ';
		value += a;
	}
	console.log(canvasStr)
	var myCanvas = document.getElementById('myCanvas');
	var ctx = myCanvas.getContext('2d')
	var oImg = new Image()
	oImg.src = './img/bg.jpg'
	oImg.onload = function(){
		var pattern = ctx.createPattern(oImg,'repeat');
		ctx.fillStyle = pattern;
		ctx.fillRect(0,0,myCanvas.width,myCanvas.height)
		ctx.textAlign = 'center'
		ctx.fillStyle = '#ccc';
		ctx.font = '46px Roboto Slab';
		ctx.setTransform(1,-0.12,0.3,1,0,12)
		ctx.fillText(canvasStr,myCanvas.width/2,60)
	}
}
createCanvas();
$('.submit').on('click',function(){
	showResult();
})
$('.refresh').on('click',function(){
	createCanvas();
})

function showResult(){
	var inputValue = $('.inputBox input').val()
	$('.error').css({
		display:'none'
	}).html('')
	console.log(inputValue)
	if(value == inputValue){
		$('.inputBox span').css({
			'background':"url(img/index.jpg)",
			'display':'inline-block',
			'background-size': '100%'
		})
		createCanvas()
	}else{
		$('.inputBox span').css({
			'background':"url(img/false.jpg)",
			'display':'inline-block',
			'background-size': '100%'
		});
		$('.error').css({
			display:'inline-block'
		}).html('验证码错误，请重新输入')
		createCanvas()
	}
}