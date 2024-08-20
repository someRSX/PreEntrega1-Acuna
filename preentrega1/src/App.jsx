import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡BIENVENIDOS A NUESTRA NUEVA TIENDA!" />
    </div>
  );
};

export default App;