import { useState,useEffect } from 'react'
import axios from 'axios'

const Search = ({datas,setData}) => {

    const [param,setParam]=useState("")
    // useEffect(() => {
    //   console.log('use effect')
    //   viewSelectedDoctors()
    // },[param])
  
    
    const handleInput=(e)=>{
      setParam(e.target.value)
    }
  
    const viewSelectedDoctors=()=>{
      axios.get(`http://localhost:9000/doctorsBySearch?query=${param}`,).then(
        (response)=>{
          console.log(response.data)
          console.log(param)
          setData(response.data)
        },
        (error)=>{
          console.log(error);
        }
      )
    }



  return (
    <div id="searchParent">
      <div id = "search">
        <input id = "searchBar" onChange={handleInput} type='text' placeholder='Search '></input>
        <button className = "button-primary" onClick = {viewSelectedDoctors}> Search</button>
      </div>
    </div>
  )
}

export default Search
