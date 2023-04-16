import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './Flow/Misc/404'
import {FallBack as Offline} from './Flow/Misc/fallback'
import Auth from './Components/Auth'
import Home from './Components/index'
import Sidebar from './sidebar/SideBar';
import MainPage from './MainPage';
//imports main page


const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };

  },[])
  const handleOnline = () => { setIsOnline(true); };
  const handleOffline = () => { setIsOnline(false); };
  return (
    <>
      {!isOnline ? 
        <Offline/>: 
        <Router>
            <Routes>
            <Route path="*" element={<NotFound></NotFound>}/>
            <Route path="/" element={Home}/>
            </Routes>
          </Router>
      }
    </>
  );
};
export default App