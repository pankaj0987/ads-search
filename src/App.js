import { useEffect, useState } from 'react';
import './App.css';
import Ads from './Components/Ads';

function App() {
  const [data,setData]=useState([])
  const [query,setQuery]=useState("")
  
  useEffect(() => {
    async function load(){
      try {
        const res=await fetch(`http://localhost:8000/getAdsByQuery/${query}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(res){
          const data=await res.json()
          if(data) setData(data.result)
        }
      } catch (error) {
        console.log(error)
      }
 
      
    }

    if(query.length>0) load()
    else setData([])
  }, [query])
  
  return (
    <div className="App">
        <div className="ads-container">
          <div className='search-bar'>
            <input type="search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search ads...'></input>
          </div>
        {data.length===0 ?
        !query.length>0? 
        <center>Search for Ads</center>
        :
        <center>sorry,no ads found</center>
        :
        <center>Search Results:{data.length}</center>
        
        }
        {data.length>0&&
        <div className="grid-container">
          {data?.map(ad=><Ads key={ad._id} adDetail={ad}/>)}
        </div>
        }
        
        
        </div>
    </div>
  );
}

export default App;
