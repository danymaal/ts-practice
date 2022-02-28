import React from 'react';
import EmpList from './components/EmpList';
import Header from './components/Header';
import './index.scss';
import Button from './components/Button';
import Events from './components/Events';
import Counter from './components/Counter';
import Person, { HairColor } from './components/Person';
// import HairColor from './components/Person';

function App() {
  const employees = [
    { id: 1, name: 'John', age: 25, status: 'delivery guy' },
    { id: 2, name: 'Johnathan', age: 49, status: 'chef' },
    { id: 3, name: 'Marel', age: 35, status: 'driver' },
  ];

  const btnClicked = () => {
    console.log('clicked');
  };

  // Notes
  // Generics - обобщения. Есть общий тип, но его нужно уточнить

  return (
    <div>
      <div className="wrapper">
        <Header companyName="Johnson & Johnson" companyYear={1985} />
      </div>
      <Person name={'noah'} age={25} hairColor={HairColor.Pink} />
      <EmpList employes={employees} />
      <Events />
      <Counter />
    </div>
  );
}

export default App;
