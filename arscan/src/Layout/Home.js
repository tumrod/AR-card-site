import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const navigateTo = () => history.push('scanner');//eg.history.push('/login');

  return (
   <div>
   <button onClick={navigateTo} type="button">Start Scanning</button>
   </div>
  );
}

export default Home;