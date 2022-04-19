import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import './App.css';
import Sidebar from './components/Sidebar'
import Mainpage from './components/Mainpage'


function App() {
  return (
    <>
      <div className='content'>
        <div className='conatiner-fluid'>
          <div className='Maincontent' id="content">
            <div className='row d-flex'>
              <div className='col-1' id="col1" ><Sidebar /> <hr/></div>
              <div className='col-9'  id="col1"><Mainpage /></div>
              <div className='col-2'>col3</div>
            </div>
          </div>
        </div>
      </div>

    </>


  );
}

export default App;
