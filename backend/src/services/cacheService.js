const LRUcache=require("../cache/LRUcache");


let cache=new LRUcache(10);

function getValue(key){
  return  cache.get(String(key));
}

function putValue(key,val){
    return  cache.put(String(key), val);
}

function getCacheInfo(){
    return {
        capacity: cache.capacity,
        size: cache.map.size,
        hitCount: cache.hitCount,
        missCount: cache.missCount
    };
}
function allNodes(){
    return cache.allNodes();
}

module.exports={
    getValue,
    putValue,
    getCacheInfo,
    allNodes
}   

