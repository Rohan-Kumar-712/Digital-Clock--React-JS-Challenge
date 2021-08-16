import React, {useState} from 'react';

const App = () => {
  
  let time = new Date().toLocaleTimeString();

  const[ctime, setCtime] = useState(time);

  const UpdatedTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
}
  setInterval(UpdatedTime, 1000);
  
  return(
    <>
    <h1>{ctime}</h1>
    </>
  );
}

export default App;