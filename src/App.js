import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import axios from "axios";
import { Addpro } from "./Components/Addpro";
import { Allproducts } from "./Components/Allproducts";
import { Editpro } from "./Components/Editpro";
import { Head } from "./Components/Head";
import { getDefaultNormalizer } from "@testing-library/react";
export const prodContext = React.createContext("");

 function App(){

  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    try {
      let respon = await axios.get('https://614eacb5b4f6d30017b4833b.mockapi.io/products')
    setData(respon.data)
    } catch (error) {
      alert('someting went worng:'+error)
    }
  }

  let [data,setData]=useState([])


  return(
    <div className="container">
      <Router>
        <prodContext.Provider value={{data,setData}}>
      <Head/>
      <Routes>
        <Route path='/all' element={<Allproducts/>}/>
        <Route path='/' element={<Allproducts/>}/>
        <Route path='/add-product' element={<Addpro/>}/>
        <Route path='/edit-product/:id' element={<Editpro/>}/>
      </Routes>
      </prodContext.Provider>   
      </Router>
    </div>
  )
}

export default App;