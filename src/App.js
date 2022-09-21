import logo from './logo.svg';
import './App.css';
import MyComponent from './mycomps/mycomps';
import NavBar from './mycomps/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './mycomps/ItemListContainer';


function App() {
  return (
    <>
    
    <div className="App">
      <NavBar/>
      <ListContainer greeting={'Bievenidos a la tienda'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  

        <p>
         Tiendita de Skins 
        </p>
        
        <MyComponent name='Awp'/>
        <MyComponent name='Ak 47'/> 

      </header>
    </div>
    </>
  );
}

export default App;
