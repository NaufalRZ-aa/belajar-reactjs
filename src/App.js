import React from "react";
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

const AppVar = ()=>{
  const nama = "Naufal Rizky";
  const absen = 23;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nama: {nama}</p>
        <p>No. Absen: {absen}</p>
      </header>
    </div>
  )
}

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.nama = "Naufal Rizky";
    this.absen = 23;
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Nama: {this.nama}</p>
          <p>No. Absen: {this.absen}</p>
        </header>
      </div>
    );
  }
}

export {
  App,
  AppVar,
  AppClass
};
