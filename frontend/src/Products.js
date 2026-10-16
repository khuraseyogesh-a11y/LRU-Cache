import React from "react";
import axios from "axios";
const useState = React.useState;
const useEffect = React.useEffect;

export default function(){
    let [products,setProducts]=React.useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/allProducts")
        .then((res)=>{
            setProducts(res.data.data);
        })
        .catch((err)=>{
            console.error("Error fetching products:", err);
        });
    },[]);

   
    return(

        <div>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Key</th>
      
    </tr>
  </thead>
  <tbody>
    {products.map((product, index) => (
      <tr key={product.key}>
        <th scope="row">{index + 1}</th>
        <td>{product.name}</td>
        <td>{product.id}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
    );
}