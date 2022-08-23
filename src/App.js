import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Artis from './componen/Artis';


function App() {

  return (
    <>
    <h1>Daftar Artis</h1>
    <ul>
      <li> <Link to="/artis/Leo-Messi">Leo Messi</Link> </li>
      <li> <Link to="/artis/Luis-Suarez">Luis Suarez</Link> </li>
      <li> <Link to="/artis/Neymar-Jr">Neymar Jr</Link> </li>
      <li> <Link to="/artis/Xavi">Xavi</Link> </li>
      <li> <Link to="/artis/Iniesta">Iniesta</Link> </li>
      <li> <Link to="/artis/Ivan-Rakitic">Ivan Rakitic</Link> </li>
      <li> <Link to="/artis/Sergio-Busquets">Sergio Busquets</Link> </li>
      <li> <Link to="/artis/Jordi-Alba">Jordi Alba</Link></li>
      <li> <Link to="/artis/Pique">Pique</Link> </li>
      <li> <Link to="/artis/Umtiti">Umtiti</Link> </li>
      <li> <Link to="/artis/Ter-Stegen">Ter Stegen</Link> </li>
      <li> <Link to="/artis/Pedri">Pedri</Link> </li>
      <li> <Link to="/artis/Puyol">Puyol</Link> </li>
      <li> <Link to="/artis/Dembele">Dembele</Link> </li>
      <li> <Link to="/artis/Sergi-Roberto">Sergi Roberto</Link> </li>
    </ul>

    <Routes>
      <Route path='/artis/:name' element={<Artis />} />
    </Routes>
    </>
  );
}

export default App;
