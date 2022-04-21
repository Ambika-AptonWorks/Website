import './App.css';
import Sidebar from './components/Sidebar'
import Mainpage from './components/Mainpage'
import Rightbar from './components/Rightbar';

function App() {
  return (
    <>
      <div className='content'>
        <div className='conatiner-fluid' id="con1">
            <div className='row'>
              <div className='col-md-1'><Sidebar /></div>
              <div className='col-md-8'> <Mainpage /></div>
              <div className='col-md-3'><Rightbar/></div>
            </div>
        </div>
      </div>

    </>


  );
}

export default App;
