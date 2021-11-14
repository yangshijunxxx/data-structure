function LinkedList() {
    //封装一个内部类
    let Node = function (element) {
        this.element=element;
        this.next=null;
    }
//    声明一个链表头和链表长度
    this.head = null;
    this.length = 0;
    LinkedList.prototype.append = function (element) {
        //1.创建新节点
        let node= new Node(element);
    //    2.判断链表是否为空
        if (this.length === 0){
            this.head = node;
        }else {
            let current = this.head;
            //循环队列直到找到最后一个节点
            while (current.next){
                current=current.next;
            }
        //    最后的节点的next指向新的节点
            current.next = node;
        }
        this.length += 1;
    }
    LinkedList.prototype.removeAt = function (position) {
        if (position > 0 && position < this.length){
            let current = this.head;
            let index=0;
            let previous = null;
            //如果删除的是第一个节点
            //head指向下一个即可
            if (position === 0){
                this.head = this.head.next;
            }else {
            //    如果删除的不是第一个那么就需要找到并删除
                while (index++ < position){
                    previous = current;
                    current=current.next;
                }
                previous.next = current.next;
            }
            this.length -= 1;
            return current.element;
        }else {
            return null;
        }
    }
    LinkedList.prototype.insert = function (position,element) {
        if (position > 0 && position < this.length){
            let node = new Node(element);
            let current = this.head;
            let previous = null;
            let index=0;
            if (position === 0){
                node.next = this.head;
                this.head = node;
            }else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next=node;
                node.next=current;
            }
            this.length+=1;
            return current.element;
        }
        else {
            return null;
        }
    }
    //转为字符串
    LinkedList.prototype.toString = function (list) {
        let current = this.head;
        let str = '';
        while (current){
            str += current.element+' ';
            current = current.next;
        }
        return str;
    }
    //在链表中查找元素
    LinkedList.prototype.indexOf = function (element) {
        let current = this.head;
        let index=0;
        //遍历 链表
        while (current){
            if (current.element === element){
                return index;
            }
            current = current.next;
            index +=1;
        }
        //不存在查找的元素返回 -1
        return -1;
    }
//    因为已经做好了查找和指定位置删除 所以我们就可以删除任何一个  链表中的值
    LinkedList.prototype.remove = function (element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    //检查是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    }
    //检查长度
    LinkedList.prototype.length = function () {
        return this.length;
    }
//    获取头节点
    LinkedList.prototype.getHead = function () {
        return this.head;
    }
}

module.exports = LinkedList;
