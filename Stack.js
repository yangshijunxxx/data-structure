//create by 1_Bit
//封装栈
function Stack() {
    this.items=[];
//   栈中属性
    // 栈的相关操作
    // 1.push():将元素压入栈
    //方式一(不推荐)：给对象添加方法，其他对象不能复用
    // this.push = () => {
    // }
    //方式二(推荐)：给Stack类添加方法，能够多对象复用
    //向栈中添加元素 基于原生数组
    Stack.prototype.push=function (element){
        return this.items.push(element);

    }
//    移除栈中元素
    Stack.prototype.pop=function (){
        return this.items.pop();
    }
//    返回栈顶元素
    Stack.prototype.peek=function (){
        return this.items[this.items.length-1]
    }
//    判空
    Stack.prototype.isEmpty=function (){
        return this.items.length === 0;
    }
//    返回长度
    Stack.prototype.length=function (){
        return this.items.length;
    }
//    清空栈
    Stack.prototype.clear=function (){
        this.items= [];
    }
    //转为字符串
    Stack.prototype.toString=function (){
        return this.items.toString();
    }
//    打印栈
    Stack.prototype.printf=function (){
        console.log(this.toString());
    }
}

module.exports = Stack;
// let s=new Stack();
// s.push(1);
// s.push(23);
// // s.push([12,23,45]);
// let a=s.toString();
// console.log(s);
// console.log(a);