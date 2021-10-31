import React from "react";
import axios from "axios";

const Admin=()=>{
    const [clientData,setclientData]= React.useState([])
    const [idArray ,setIdArray] = React.useState([])

    React.useEffect(()=>{
        BankData()
    },[])
 

    const BankData=async()=>{
        let results=await axios.get("https://617bbb86d842cf001711c033.mockapi.io/clients/")
        let ids = (results.data).map(u=>{
            return u.id
        })
        setIdArray(ids)
    }


    React.useEffect(()=>{
        dataById()
    },[idArray])

const dataById = ()=>{
    let result = idArray.map(async(val)=>{
        return await (await axios.get(`https://617bbb86d842cf001711c033.mockapi.io/clients/${val}/members`)).data
      
    })
    



    return(
        <div className='admin'>
   
              
        </div>
    )
}
}
export  default Admin