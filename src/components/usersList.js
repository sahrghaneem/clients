import React from "react";
import axios from "axios";
import User from "./users";

export default function UsersList(props){
    const[data,setData]=React.useState(null)
    const[Name,setName]=React.useState("")
    const[isSenior,setisSenior]=React.useState("")
    const[department,setDepartment]=React.useState("")

    const [tempUser ,setTempUser] = React.useState('')



    React.useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        let results=await axios.get("https://617bbb86d842cf001711c033.mockapi.io/clients/")
        setData(results.data)
    //    let  memberData= await axios.get('https://617bbb86d842cf001711c033.mockapi.io/clients/'+id+'/members')
    //    setData(memberData.data)
    }


 const change=(e)=>{
        let chosen=data.find((user)=>{
            if(e.target.value===user.name){
             return user
            }
            })
    setTempUser(chosen)
    }


    return(
        <div >
        
             <select onChange={change}>
                 <option>Name</option>
                { data?  data.map(u=>{
                  return<option key={u.id} >{u.name}</option>
                }):"loading"
                }
            </select>


            {tempUser ? <User data={data} user={tempUser} deleteFilterData={(val)=>{setData(val)
            setTempUser("")}}/> : ''}
        </div>
    )
}