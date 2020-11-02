import React , {useState} from "react";
import WrittenMessage from "./WrittenMessage";

function CreateMessage() {
    const[name,setName] = useState("");
    const[message,setMessage] = useState("");
    const[pName,setPName] = useState("");
    const[pMessage,setPMessage] = useState("");
    
const submitHandler = (e) => {
         e.preventDefault();
        
         setPName(name);
         setPMessage(message);
         setName("");
         setMessage("");
// Example POST method implementation:
async function postData(url = 'https://murselaysan-chatserver.herokuapp.com/messages', data = {
        name:name,
        message:message
  }) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    // 'Content-Type': 'application/json'
     'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://murselaysan-chatserver.herokuapp.com/messages', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });    
}

  return (
    <div>
       <WrittenMessage name ={pName} message = {pMessage}/> 

      <form onSubmit = {submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control w-50 p-3 h-auto d-inline-block"
            placeholder="Your Name"
            value={name}
            onChange={e=>setName(e.target.value)}
            name="name"
            required
          />
        </div>
          <div className="form-group">
          <input
            type="text"
            className="form-control w-50 p-3 h-auto d-inline-block"
            placeholder="Your Message"
            value = {message}
            onChange={e=>setMessage(e.target.value)}
            message = "message"
            required
          />
        </div>
        <input type="submit" value = "Submit" className="btn btn-primary"  /> 
      </form>
    </div>
  );
}

export default CreateMessage;


//const submitHandler = (e) => {
  //        e.preventDefault();
  
  //      //  let messageBody =;
        
  //        setPName(name);
  //        setPMessage(message);
  //        setName("");
  //        setMessage("");
       
      
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify( {
  //        from:name,
  //         text:message
  //     })
  //   };
  
  //   fetch("https://murselaysan-chatserver.herokuapp.com/messages", requestOptions)
  //       .then(x => x.json())
  //       .then(x => console.log(x));
  // }