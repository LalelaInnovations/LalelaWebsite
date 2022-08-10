import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComp from './user-dashboard/NavBarComp';

function App() {
  return (
    <div className="App">
      <NavBarComp doctorName="Scroggins"/>
    </div>
  );
}

export default App;
