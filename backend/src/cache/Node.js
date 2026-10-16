
class Node{
    constructor(key,val){
       this.val=val;
       this.key=key;
       this.lastUsed=Date.now();
       this.next=null;
       this.prev=null;

    }

};

// let node=new Node("P001","Laptop",30);

// console.log(node);

module.exports=Node;

