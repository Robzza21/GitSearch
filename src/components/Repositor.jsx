import React from 'react';

const Repos = ({repo}) => {
  return (
    <div className='repodiv'>
      <h2>{repo.name}</h2>
    </div>
  );
}
const Repositor = ({repos}) => {
  return (
    <div className="repodiv2">
      {repos.map((repo) => 
       <Repos key = {repo.id} repo = {repo} />)}
    </div>
  );
}

export default Repositor;