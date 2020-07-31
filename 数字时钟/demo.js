
function Index(dom, use24Hours) {
    this.use24Hours = use24Hours
    this.column = Array.from(dom);
    this.classList = ['visible','close','far','far','distance','distance']
    this.createDom();
    this.start();
}

Index.prototype.start = function () {
    var self = this;
    setInterval(function () {
        var c = self.getClock()
        self.column.forEach(function(ele,index){
            var n = + c[index]
            var offset = n * 86
            $(ele).css({
                'transform':'translateY(calc(50vh - '+ offset + 'px - 43px))'
            })
            Array.from(ele.children).forEach(function(ele2,index2){
                var className = self.getClass(n,index2);
                $(ele2).attr('class',className);
            })
        })
    }, 200);
}

Index.prototype.getClass = function(n, i){

    var className = this.classList.find(function(ele,index){
        return i - index === n || i + index ===n
    })

    return className || '';
}

Index.prototype.getClock = function () {
    var d = new Date()
    return [this.use24Hours ? d.getHours() : (d.getHours() % 12 || 12), d.getMinutes(), d.getSeconds()].reduce(function (p, n) {
        return p + ('0' + n).slice(-2);
    }, '')
}

Index.prototype.createDom = function createDom() {
    for (var i = 0; i < 6; i++) {
        var oDiv = '<div>' + i + '</div>'
        $('.six').append(oDiv)
    }
    for (var i = 0; i < 10; i++) {
        var oDiv = '<div>' + i + '</div>'
        $('.ten').append(oDiv)
    }

}

new Index($('.column'),true );  