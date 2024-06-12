import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchGown = () => {
    const [data,setData]=useState(
        {
            "gname":""
        }
    )
    const [result,setResult]=useState([])

    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Successfully deleted")
                    }
                else{
                    alert("error in deletion")
                }
            }
        ).catch()
    }
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                console.log(response.data)
                setResult(response.data)
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Stylist Name</label>
                    <input type="text" className="form-control" name='gname' value={data.gname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    {result.map(
                        (value,index)=>{
                            return  <div class="card">
                            <img src={value.gimage} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{value.gname}</h5>
                                <p class="card-text">{value.gid}</p>
                               <button class="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                            </div>
                        
                    </div>


                        }
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchGown