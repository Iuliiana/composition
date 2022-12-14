import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";
import {Cardspage} from "./pages/Cardspage";
import {Decompositionpage} from "./pages/Decompositionpage";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='cards' element={<Cardspage/>}/>
          <Route path='decomposition' element={<Decompositionpage/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
