import React ,{useState} from 'react'

const App = () => {
 
  const[name,setName]= useState()
  const[fullname,setFullname]= useState()
  const[lname,setLname]= useState()
  const[lnewname,setLnewname]= useState()
  const[gname,setGname]= useState()
  const[fullgname,setFullgname]= useState()
  const[nname,setNname]= useState()
  const[fullnname,setFullnname]= useState()

  const inputevent=(event)=>{
    
    // console.log(event.target.value)
    setName(event.target.value)
    
    
  }
  const inputevent2=(event)=>{
    setLname(event.target.value)
    
  }
  const inputevent3=(event)=>{
    setGname(event.target.value)
    
  }
  const inputevent4=(event)=>{
    setNname(event.target.value)
    
  }
  const onSubmits=(event)=>{
   event.preventDefault();
    setFullname(name)
    setLnewname(lname)
    setFullgname(gname)
    setFullnname(nname)

  }
  
  return (
 
   

    <div>
    <form onSubmit={onSubmits}>
    <h1>Hello {fullname} {lnewname}</h1>
    <p>{fullgname}</p>
    <p>{fullnname}</p>
    <input style={{padding:20,textAlign:'Center',backgroundColor:'rgb(228, 76, 87)',border:'2px solid Black',borderRadius:'4px'}} type="text" placeholder="Enter ur Name" 
      onChange={inputevent}
      value={name}
    /><br/><br />
     <input style={{padding:20,textAlign:'Center',backgroundColor:'rgb(228, 76, 87)',border:'2px solid Black',borderRadius:'4px'}} type="text" placeholder="Enter ur lastname" 
      onChange={inputevent2}
      value={lname}
    /><br/><br /> 
     <input style={{padding:20,textAlign:'Center',backgroundColor:'rgb(228, 76, 87)',border:'2px solid Black',borderRadius:'4px'}} type="text" placeholder="Enter ur gmail" 
      onChange={inputevent3}
      value={gname}
    /><br/><br /> 
     <input style={{padding:20,textAlign:'Center',backgroundColor:'rgb(228, 76, 87)',border:'2px solid Black',borderRadius:'4px'}} type="text" placeholder="Enter ur phone number" 
      onChange={inputevent4}
      value={nname}
    /><br/>
    
    <br /><button type="submit">Submit Me 👍</button>
    </form>
      
    </div>
   
    
  )
}

export default App;
