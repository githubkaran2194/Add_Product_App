import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const Read = () => {

    const [details, setDetails]=useState([]);

    useEffect(() => {
    getData()
    }, [])
    
    function getData(){
        axios.get("https://6437a3340c58d3b145754311.mockapi.io/API/CRUD")
        .then((res)=>{
     console.log(res);
     setDetails(res.data)
        })
    }

    function handleDelete(id){
        axios.delete(`https://6437a3340c58d3b145754311.mockapi.io/API/CRUD/${id}`)
        .then(()=>{
   getData();
        })
    }

    function setLocalStorage(id, name, price, detail){
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("price", price)
        localStorage.setItem("detail", detail)
    }   
  return (
    <div className='container col-md-12'> 
      <Link to="/" className='btn btn-outline-info'>
        Add Product
    </Link>
    <div className="text text-center mb-3  text-white">
  
        <h1>Read Details</h1>
    </div>
<table class="table col-sm-12">
  <thead class="thead">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Details</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>

{  
   details.map((e)=>{
    return (<tbody>
        <tr>
      <th scope="row">{e.id}</th>
      <td>{e.name}</td>
      <td>{e.price}</td>
      <td>{e.detail}</td>
      <td>
        <Link className='btn btn-danger' to="/update" onClick={()=>setLocalStorage(
            e.id, 
            e.name, 
            e.price,
            e.detail
        )}>
        
        <a href="#" className="bg-transparent text-white" data-toggle="tooltip" data-placement="left" title='Edit/Update'>
        <i className='fas fa-edit bg-transparent'></i>
              </a>

        
        </Link>
        &nbsp;
        <button className='btn btn-dark' onClick={()=>handleDelete(e.id)}>
        <a href="#" className="bg-transparent text-white" data-toggle="tooltip" data-placement="left" title='Delete'>
        <i className='fas fa-remove bg-transparent'></i>
        </a>
        </button>
      </td>
    </tr>
    </tbody>)
   })
 }
</table>

    </div>
  )
}

export default Read