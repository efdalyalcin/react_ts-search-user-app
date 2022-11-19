import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { data } from './api/getData';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import AddLinkPage from './pages/AddLinkPage/AddLinkPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  // data is uploaded to localstorage since the task asks to
  // "Rhona Mooney" is added to data multiple times
  // it is to create more than 3 found in search
  useEffect(
    () => {window.localStorage.setItem('data', JSON.stringify(data))},
    [],
  );

  // links are created with path `react_ts-search-user-app/` for github deploy purposes
  return (  
    <div className="App" >
      <Routes>
        <Route path="react_ts-search-user-app/" element={<Home />} />
        <Route path="react_ts-search-user-app/search" element={<SearchPage />} />
        <Route path="react_ts-search-user-app/addLink" element={<AddLinkPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
