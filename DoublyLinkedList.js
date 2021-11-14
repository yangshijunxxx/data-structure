function DoublyLinkedList() {
    let Node = function (element){
        this.element=element;
        this.next = null;
        this.pre = null;
    }
    this.head = null;
    this.length = 0;
    this.tail = null;
    DoublyLinkedList.prototype.insert = function (position,element) {
        if (position >= 0 && position <= this.length){
            let node = new Node(element);
            let previous = null;
            let current = this.head;
            let index = 0;
            if (position === 0){
                if (!this.head){
                    this.head=node;
                    this.tail=node;
                }else{
                    node.next = current;
                    current.pre = node;
                    this.head = node;
                }
            }
            else if (position === this.length){
                current = this.tail;
                current.next = node;
                node.pre = current;
                this.tail = node;
            }
            else {
                while (index < position){
                    previous = current;
                    current = current.next;
                    index +=1;
                }
                node.next = current;
                previous.next = node;
                current.pre = node;
                node.pre = current;
            }
            this.length +=1;
            return true;
        }
        else {
            return false;
        }
    }
    DoublyLinkedList.prototype.removeAt = function (position) {
        let current = this.head;
        let index = 0;
        let previous;
        if (position > -1 && position < this.length)
        {
            if (position === 0){
                this.head = current.next;
                if (this.length === 1){
                    this.tail = null;
                }else {
                    this.head = null;
                }
            }else if (position === this.length-1){
                current = this.tail;
                this.tail = current.pre;
                this.tail.next = null;
            }else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.pre = previous;
            }
            this.length -=1;
            return current.element;
        }else {
            return null;
        }

    }
    DoublyLinkedList.prototype.toString = function (list) {
        let current = this.head;
        let str = '';
        while (current){
            str += current.element+' ';
            current = current.next;
        }
        return str;
    }
}

module.exports = DoublyLinkedList;
//var DoublyLinkedList = require("./DoublyLinkedList");
// let a = new DoublyLinkedList();
// a.insert(0,'l');
// a.insert(1,'O');
// a.insert(2,'V');
// a.insert(3,'E');
// a.insert(4,'P');
// console.log(a.removeAt(4));
// console.log(a.toString());