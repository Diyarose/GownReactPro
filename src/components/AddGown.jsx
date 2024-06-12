import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddGown = () => {
    const [data,setData]=useState(
        {
            "gname":"",
            "gid":"",
            "gprice":"",
            "gimage":""
        }
    )
   const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
   }
   const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Succesfully added")
                }
                else{
                    alert("Error")
                }
        }
    ).catch().finally()
   }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Stylist Name</label>
                            <input type="text" className="form-control" name='gname' value={data.gname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gown Id</label>
                            <input type="text" className="form-control" name='gid' value={data.gid}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control"  name='gprice' value={data.gprice} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Upload Image</label>
                            <input type="text" className="form-control" name='gimage'  value={data.gimage} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddGown