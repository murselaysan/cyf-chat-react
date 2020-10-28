import React from 'react'

function CreateMessage() {
    return (
        <div>
            <form>
             <div className="form-group a">
             
            <input type="email" className="form-control w-50 p-3 h-25 d-inline-block" placeholder= "Your Name"/>
            </div>
            <div className="form-group b">
          
           <input type="text" className="form-control w-50 p-3 h-25 d-inline-block"  placeholder= "Your Message" />
            </div>
           <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}

export default CreateMessage
