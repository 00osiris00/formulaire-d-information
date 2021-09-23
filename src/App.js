import React, {useState, useEffect} from 'react';
import './style.css';


//getting data from localStorage
const getDataFromLS = () => {
  const data = localStorage.getItem('users');
  if (data){
    return JSON.parse(data);
  }else{
    return [];
  }
}

export default function App() {

  // main array of object state // users state // users array of objects
  const [users, setUsers] = useState(getDataFromLS);
  //input field states
  const [Lastname, setLastname]= useState('');
  const [Firstname, setFirstname]= useState('');
  const [Email, setEmail]= useState('');
  const [City, setCity]= useState('');

  //for submit event
  const handleAddUserSubmit = (e)=> {
    e.preventDefault();
    //creating an object
    let user ={
      Lastname,
      Firstname,
      Email,
      City
    }
    setUsers([...users, user]);
    setLastname('');
    setFirstname('');
    setEmail('');
    setCity('')
    

  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])
  
  return <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6" >
          <div className="container" id="formulaire">
            <form action="" onSubmit ={handleAddUserSubmit}>
              <div className="form-group">
                <label for="Lastname">Lastname:</label>
                <input type="text" className="form-control" placeholder="Enter Lastname" id="Lastname" required onChange ={(e => setLastname(e.target.value))} value ={Lastname}/>
              </div>
              <div className="form-group">
                <label for="Firstname">Firstname:</label>
                <input type="text" className ="form-control" placeholder="Enter Firstname" id="Firstname"  required onChange ={(e => setFirstname(e.target.value))} value ={Firstname}/>
              </div>
              <div className="form-group">
                <label for="Email">Email:</label>
                <input type="Email" className="form-control" placeholder="Enter Email" id="Email" required onChange ={(e => setEmail(e.target.value))} value ={Email}/>
              </div>
              <div className="form-group" >
                <label for="City">City:</label>
                <select name="City" className="custom-select" required onChange ={(e => setCity(e.target.value))} value ={City}>
                  <option selected>select your City</option>
                  <option value="Anlakely">Anlakely</option>
                  <option value="Ambohimanarina">Ambohimanarina</option>
                  <option value="Andoharanofotsy">Andoharanofotsy</option>
                  <option value="Antaninarenina">Antaninarenina</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="container" id="form">
          {users.length < 1 && <div> No user are added yet</div>}
          {users.length > 0 && 
            <div className='table-responsive'>
              <table className= "table">
                <thead>
                  <tr>
                    <td>Lastname</td>
                    <td>Firstname</td>
                    <td>Email</td>
                    <td>City</td>
                  </tr>
                </thead>
                <tbody>
                  {users.length>=1 ? (
                    users.map(function (user, index){
                      return(
                        <tr key={user.index}>
                          <td>{user.Lastname}</td>
                          <td>{user.Firstname}</td>
                          <td>{user.Email}</td>
                          <td>{user.City}</td>
                        </tr>
                      )
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>
  </div>;
}





