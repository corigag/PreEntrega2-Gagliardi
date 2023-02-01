import './App.css'; 

//Components 
import { Navbar } from './NavBar/Navbar';
import { ItemsListContainer } from "./ItemsListContainer/ItemsListContainer";

export const App = () => {
  
  return (
    <>
      <Navbar/> 
      <ItemsListContainer greeting={"Bienvenides a la tienda online de Hampi Yura"}/>
    </>
  )
}