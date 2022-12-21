import React, { useState } from "react";
// import "./CRUD.css";
function CRUD(){
    const [name,setName]=useState("")
    const [allData,setAllData]=useState([])
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState()

    const handleAdd=()=>{
        if(name.length!==0){
        setAllData(newData=>[...newData,name])
        setName("")
        }
    }

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=()=>{
        allData.splice(editIndex,1,name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }
    
    return(
        <div className="container">
         <div className="row justify-content-center">

         
            <h1 className="display-1">CRUD Insert, Update and Delete</h1>
            <label htmlFor="title" className="form-label mt-3" style={{fontWeight:"bold",fontSize:'20px'}}>
              Add Notes !
            </label>
            <input type="text" className="form-control" id="title" placeholder="Enter Your Title" value={name} onChange={(e)=>setName(e.target.value)}/>
            
            {!show?<button onClick={handleAdd} className="btn btn-success mt-3">Add</button>:
            <button onClick={handleUpdate} className="btn btn-warning mt-3">Update</button>}

            {
                allData.map((val,i)=>
                <div>
                    <h1 className="mt-3">{val}</h1>
                    <button className="edit btn btn-primary" onClick={()=>handleEdit(i)} >Edit</button>
                    <button className="delete btn btn-danger mx-2" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
            </div>
        </div>
    );
}
export default CRUD; 
