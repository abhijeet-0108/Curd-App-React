import "./App.css";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
// import Home from "./Component/Pages/Home";
import Navbar from "./Component/Pages/Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Component/Pages/NotFound";
// import EditModal from "./Component/Pages/EditModal";
// import { useState } from "react";
import CRUD from "./Component/Curd";


export default function App() {
  // const[title,setTitle] = useState("")
  // const[description,setDescription] = useState("")
  // const[notes,setNotes] = useState(getNotesFromLs)
  // const[editId,setEditId] = useState("")
  // console.log(notes);
  // localStorage.setItem("notes",JSON.stringify(notes))
  return (
    <div className="App">
    {/* <EditModal editId={editId} notes={notes} setNotes={setNotes}/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CRUD/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  // function getNotesFromLs(){
  //   const note = JSON.parse(localStorage.getItem("notes"));
  //   if(note){
  //     return note
  //   }else{
  //     return [];
  //   }
  // }
}
 


