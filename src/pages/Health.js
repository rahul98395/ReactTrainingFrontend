import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import '../css/Health.css'

const Health = () => {

    useEffect(()=>{
        getDoctorsFromServer()
        
      },[])
    
      const getDoctorsFromServer=()=>{
        axios.get(`http://localhost:9000/doctors`).then(
          (response)=>{
            setData(response.data)
            console.log(response.data)
          },
          (error)=>{
            console.log(error);
          }
        )
      }
      const [data,setData] = useState([])

  return (
    <div className="App">
      <Header/>
      <Search datas={data} setData = {setData}/>
      <Tasks datas={data}/>
    </div>
  )
}

export default Health
