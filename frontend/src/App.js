import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListRegistration from './components/ListRegistration';
import AddRegistration from './components/AddRegistration';
import EditRegistration from './components/EditRegistration';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListRegistration />}></Route>
        <Route path="/add" element={<AddRegistration />}></Route>
        <Route path="/edit/:id" element={<EditRegistration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
