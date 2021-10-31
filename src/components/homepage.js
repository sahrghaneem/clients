import React from "react";
import axios from "axios";


export default function AboutUs(props) {
       const [carsdata, setCarsData] = React.useState(null)
    const [tempUser, setTempUser] = React.useState('')
    const [tempMess, setTempMess] = React.useState('')
    const [employeesdata, setEmployeesData] = React.useState(false)

    React.useEffect(() => {
        getCarsData()
        getEmployeesData()
    }, [])

    const getCarsData = async () => {
        let results = await axios.get("https://617bbb86d842cf001711c033.mockapi.io/cars")
        setCarsData(results.data)   
    }
    const getEmployeesData = async () => {
        let results = await axios.get("https://617bbb86d842cf001711c033.mockapi.io/clients")
        setEmployeesData(results.data)   
    }
    const carschange=(e)=>{
        //     console.log(e.target.value)
        // console.log(data)
            let chosen=carsdata.find((user)=>{
                // console.log(user)
                if(e.target.value===user.name){
                 return user
                }
                })
        setTempUser(chosen)
        }
        const Empchange=(e)=>{
            //     console.log(e.target.value)
            // console.log(data)
                let chosen=employeesdata.find((user)=>{
                    // console.log(user)
                    if(e.target.value===user.name){
                     return user
                    }
                    })
            setTempUser(chosen)
            }

    return (
        <div className="employee">
            <h1>👔Rent a car👔<br/>🚗🚙</h1>
            <h3>Welcome to the new car renting site,
                here you can match a car to your employees easily.
            </h3>
            <div className='firstDive'>
            <select className={'btn'} onChange={carschange}>
                 <option>cars</option>
                { carsdata?  carsdata.map(u=>{
                  return<option key={u.id} >{u.name}</option>
                }):"loading"
                }
            </select>
            <select className={'btn'} onChange={Empchange}>
                 <option>Seniors</option>
                { employeesdata?  employeesdata.map(u=>{
                  return<option key={u.id} >{u.name}</option>
                }):"loading"
                }
            </select>
            <br />
            </div>
        </div>
    )
}