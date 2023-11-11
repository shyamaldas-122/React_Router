import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/shyamaldas-122`)
    //     .then(res => res.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data);
    //     });
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img style={{borderRadius:"50%", textAlign:"center", display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"15px", width:"20%"}} src={data.avatar_url} alt='github picture' width={300}/>
    <div className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-2xl px-4 my-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
    {data.name}
    </div>
    </div>
    
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch(`https://api.github.com/users/shyamaldas-122`);
    return response.json();
}