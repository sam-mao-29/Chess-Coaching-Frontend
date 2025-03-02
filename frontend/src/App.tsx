import Schedule from './components/schedule';
import Roster from './components/roster';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProfile from './components/studentProfile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Schedule />
              <Roster />
            </>
            } />
          <Route path="/student/:id" element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
      
      
      {/*<Rectangle // Students
        width="20%" 
        height="90%"
        left="75%"
        backgroundColor="#4B5563"
      />
      <Rectangle // Current month revenue
        width="20%" 
        height="32%"
        top="60%"
        left="30%"
        backgroundColor="#10B981"
      />*/}
};
export default App;