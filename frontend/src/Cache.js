import React from "react";
import "./App.css";
import {useState,useEffect} from "react";
import axios from "axios";

export default function(){
      
  
        let [getCache, setgetCache] = useState("");
         let [getCacheResult, setgetCacheResult] = useState(null);

        let [putCacheKey, setputCacheKey] = useState("");
        let [putCacheValue, setputCacheValue] = useState("");
        let [putCacheResult, setputCacheResult] = useState({});

        let[entriesValue,setEntriesValue]=useState([]);
        let[entriesKey,setEntriesKey]=useState([]);

        


        let[render,setRender]=useState(false);

        
        
       
     
        
       useEffect(()=>{
        axios.get("http://localhost:8080/allNodes").then((res)=>{
          setEntriesValue(res.data.data.values);
           setEntriesKey(res.data.data.ids);
        }).catch((err)=>{
          console.log(err);
        })
        
        

       


      },[render]);

     
      function handlePutButtonClick() {
        setputCacheKey("");
        setputCacheValue("");
        
      }
      


       async function getCacheData(){

      
        await axios.post("http://localhost:8080/getCache", {
          
          id:getCache
          
        }).then((res)=>{
          setgetCacheResult(res.data);
          
          console.log(res.data.value.name);
        }).catch((err)=>{
          console.log(err);
        })
        
        setRender(!render);
  

      }
      


      async function putCacheData(){
      
       await axios.post("http://localhost:8080/putCache", {
          id:putCacheKey,
          val:putCacheValue }).then((res)=>{
          console.log(res.data);
        }).catch((err)=>{
          console.log(err);
        } ) 

         setRender(!render); 
        handlePutButtonClick();
        
      }
        


    
    const nodes = entriesKey.map((key, index) => ({
    id: key,
    val: entriesValue[index]
}));

    return (

        <div className="container">

            <h2 className="mb-4">
                LRU Cache
            </h2>

            <div className="row g-4">

                {nodes.map((node, index) => (

                    <div className="col-md-2" key={node.id}>

                        <div className="card shadow-sm">

                            <div className="card-body">

                                 <h5 className="card-title">
                                    Node {index + 1}
                                  </h5>

                                 <p className="card-text mb-1">
                                    <strong>ID:</strong> {node.id}
                                  </p>

                                <p className="card-text">
                                    <strong>Value:</strong> {node.val}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* <CacheService/> */}
            <div className="container mt-4">

      <h2 className="mb-4">Cache Operations</h2>

      <div className="row">

        {/* GET CACHE */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5 className="card-title">Get Cache</h5>
              <p className="text-muted">
                Retrieve a value from the cache using its key.
              </p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter cache key"
                  onChange={(e) => setgetCache(e.target.value)}
                />

                <button className="btn btn-primary" onClick={getCacheData}  >
                  Get Cache
                </button>
              </div>

             <div className="alert alert-light border">
    {getCacheResult && (
        <div>
            <h5>Cache Result</h5>

            <p>
                <strong>Value:</strong>{" "}
                {typeof getCacheResult.value === "object" &&
                 getCacheResult.value !== null
                    ? getCacheResult.value.name ??
                      JSON.stringify(getCacheResult.value)
                    : String(getCacheResult.value ?? "No value")}
            </p>

            {typeof getCacheResult.value === "object" &&
             getCacheResult.value !== null && (
                <p>
                    <strong>Product ID:</strong>{" "}
                    {getCacheResult.value.id ?? "N/A"}
                </p>
            )}

            <p>
                <strong>Source:</strong>{" "}
                {getCacheResult.source ?? "Unknown"}
            </p>
        </div>
    )}
</div>

            </div>
          </div>
        </div>


        {/* PUT CACHE */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5 className="card-title">Put Cache</h5>
              <p className="text-muted">
                Add or update a value in the cache.
              </p>

              <input
                type="text"
                className="form-control mb-3"
                value={putCacheKey}
                placeholder="Enter cache key"
                onChange={(e) => setputCacheKey(e.target.value)}
              />

              <input
                type="text"
                className="form-control mb-3"
                 value={putCacheValue}
                placeholder="Enter cache value"
                onChange={(e) => setputCacheValue(e.target.value)}
              />

              <button className="btn btn-success" onClick={putCacheData}>
                Put Cache
              </button>

            </div>
          </div>
        </div>

      </div>

    </div>
        </div>

 

    );
            

    
    
}