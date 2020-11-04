import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Naufal Rizky A.A";
  let absen = 23;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nama: {name}</p>
        <p>No. Absen: {absen}</p>
      </header>
    </div>
  );
}

export default App;
