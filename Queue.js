//create by 1_Bit
//封装队列
function Queue() {
//    这里就是属性和方法
    this.items=[];
//    添加元素
    Queue.prototype.enqueue = function (element){
        return this.items.push (element);
    }
//    删除栈顶元素 队列先进先出
    Queue.prototype.dequeue=function (){
        return this.items.shift();
    }
//    查看队列头元素
    Queue.prototype.first=function (){
        return this.items[0];
    }
//    队列toString
    Queue.prototype.toString = function (){
        return this.items.toString();
    }
//    打印队列
    Queue.prototype.printf=function (){
        console.log(this.toString());
    }

}

module.exports = Queue;