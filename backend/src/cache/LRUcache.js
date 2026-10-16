
const Node = require("./Node.js");

function Delete(node) {
    let temp1 = node.prev;
    let temp2 = node.next;

    temp1.next = temp2;
    temp2.prev = temp1;
}

function AddAtHead(head, node) {
    let temp = head.next;

    head.next = node;
    node.prev = head;

    node.next = temp;
    temp.prev = node;
}

class LRUcache {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.map = new Map();
        this.hitCount = 0;
        this.missCount = 0;

        this.head = new Node(null, null);
        this.tail = new Node(null, null);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (this.map.has(key)) {
            this.hitCount++;
            let node = this.map.get(key);
            node.lastUsed = Date.now();
            Delete(node);
            AddAtHead(this.head, node);
             
            return node.val;
        }

        this.missCount++;
        return null;
    }

    put(key, val_) {
        if (this.map.has(key)) {
            let node = this.map.get(key);

            node.val = val_;
             node.lastUsed = Date.now();
            Delete(node);
            AddAtHead(this.head, node);
        } else {
            if (this.map.size === this.capacity) {
                let lruNode = this.tail.prev;

                Delete(lruNode);
                this.map.delete(lruNode.key);
            }

            let new_node = new Node(key, val_);

            this.map.set(key, new_node);
            AddAtHead(this.head, new_node);
        }

        return true;
    }
    allNodes(){
        let temp=this.head.next;
        let values=[];
        let ids=[];
        let lastUsed=[];
        while(temp!==this.tail){
            values.push(temp.val);
            ids.push(temp.key);
            lastUsed.push(temp.lastUsed);
            temp=temp.next;
        }
       
        return {values, ids, lastUsed};
    }
}

module.exports = LRUcache;