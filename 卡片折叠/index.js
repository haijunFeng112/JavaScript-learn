var openBtn = document.getElementsByClassName('openBtn')[0];
var left = document.getElementsByClassName('left')[0]
var right = document.getElementsByClassName('right')[0]
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var back = document.getElementsByClassName('back')[0]


openBtn.addEventListener('click', function(){
    left.classList.add('open')
    setTimeout(function(){
        right.classList.add('open')
    },250)
    setTimeout(function(){
        back.classList.add('open');
    },300)
})

closeBtn.addEventListener('click',function(){
    right.classList.remove('open');
    setTimeout(function(){
        left.classList.remove('open')
    },250)
    setTimeout(function(){
        back.classList.remove('open')
    },600)

})