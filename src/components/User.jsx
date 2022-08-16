import React, {useState,useEffect} from 'react';
import Repositor from './Repositor';

const User = ({user,setUser}) => {

  const [repos,setRepos] = useState(null);

  useEffect(() => {
    if(user){
      fetch(`https://api.github.com/users/${user.login}/repos`)
      .then((res) => {
        if(!res.ok){
          throw Error(`Responded with code ${res.status}: ${res.statusText}`);
        }else{
          return res.json();
        }
      })
      .then(data => setRepos(data))
      .catch(err => alert(err));
    }
  },[user]);
  return (
    <div className='userdiv'>
      <img src = {user.avatar_url} alt = {user.name} />
      <h2>BIO:{user.bio}</h2>
      <h2>LOCATION:{user.location}</h2>
      <h2>REPOSITORIES:</h2>
      {repos ? <Repositor repos = {repos} /> : <p>Još nema repositorija</p>}  
      <button className="rst" onClick={(e) => { e.preventDefault()
        setUser(null)
        }}>Reset</button>
    </div>
  );
}

export default User;