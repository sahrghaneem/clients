import axios from "axios";

export default function User({FilterData,user,data}){
const filterUser= async (id)=>{
    if(user.isActiv === false){
    const clientUser =  await axios.get('https://617bbb86d842cf001711c033.mockapi.io/clients/'+id+'/members')
    console.log(clientUser);

    if (clientUser.status === 200){
        const filterData= [...data]
        let result=filterData.filter((val)=>{
            return  val.id !==id
        })

        FilterData(result)

    }}else{
        alert("This User Is Active")
    }

    }
    return(
        <div className="employee" key={user.id}>
            <br/>
            <div>Name: {user.name}</div>
            <div>Senior/Golden: {user.isSenior?"Senior":"Golden"}</div>
            <div>Department : {user.department}</div>
            <div>IsActive: {user.isActive?"✔":"✖"}</div>
            <br/>
        </div>
    )
}