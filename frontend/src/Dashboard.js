import React from "react";
import axios from "axios";
const useState = React.useState;
const useEffect = React.useEffect;


export default function(){

  let [Entries, setEntries] = useState();
  let [HitRate, setHitRate] = useState(0);
  let [Capacity, setCapacity] = useState();

  let [entriesValue, setEntriesValue] = useState([]);
  let [entriesKey, setEntriesKey] = useState([]);
  let [entriesLastUsed, setEntriesLastUsed] = useState([]);

  useEffect(()=>{
    axios.get("https://lru-cache-656a.onrender.com/Info").then((res)=>{
     console.log(res.data.data);
     setEntries(res.data.data.size);
     setCapacity(res.data.data.capacity);
    let hitCount = res.data.data.hitCount;
    let missCount = res.data.data.missCount;
    let totalRequests = hitCount + missCount;
    let hitRate = (hitCount / totalRequests) * 100;
    setHitRate(hitRate.toFixed(2));
    })
    
  },[])
   

  useEffect(()=>{
    axios.get("https://lru-cache-656a.onrender.com/allNodes").then((res)=>{
      // console.log("Answer",res.data.data);
      setEntriesValue(res.data.data.values);
      setEntriesKey(res.data.data.ids);
      setEntriesLastUsed(res.data.data.lastUsed);

    }).catch((err)=>{
      console.log(err);
    } )},[]);
  


    return(

        <div>

        

          <h2 className="mb-4">
            LRU Cache Dashboard
          </h2>


          <div className="row g-4 mb-4">

   
            <div className="col-md-4">

              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h6 className="text-muted">
                    Capacity
                  </h6>

                  <h2>
                    {Capacity}
                  </h2>

                </div>

              </div>

            </div>


            {/* Entries */}
            <div className="col-md-4">

              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h6 className="text-muted">
                    Entries
                  </h6>

                  <h2>
                    {Entries}/{Capacity}
                  </h2>

                </div>

              </div>

            </div>


            {/* Hit Rate */}
            <div className="col-md-4">

              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h6 className="text-muted">
                    Hit Rate
                  </h6>

                  <h2>
                    {HitRate}%
                  </h2>

                </div>

              </div>

            </div>

          </div>


          {/* Cache Entries */}
          <div className="card shadow-sm">

            <div className="card-header bg-white">

              <h5 className="mb-0">
                Cache Entries
              </h5>

            </div>


            <div className="card-body p-0">

              <div className="table-responsive">

                <table className="table table-hover mb-0">

                  <thead className="table-light">

                    <tr>

                      <th>Key</th>

                      <th>Product</th>

              

                      <th>Last Used</th>

                    </tr>

                  </thead>


                 <tbody>
  {entriesKey.map((key, index) => (
    <tr key={key}>
      <td>
        <strong>{key}</strong>
      </td>

      <td>
        {entriesValue[index]}
      </td>

      <td>
        {Math.floor((Date.now() - entriesLastUsed[index]) / 1000)} sec ago
      </td>
    </tr>
  ))}
</tbody>

                </table>

              </div>

            </div>
                      
          </div>
          
                 {/* <h1>regrgrw</h1> */}
       
        </div>
    );
}