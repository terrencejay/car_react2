import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'

// function App() {

//   return (
//     <HashRouter>
//       <Navbar />
//       <Routes>
//         {routes.map((route: any, index: any) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={
//               <route.component />
//             }
//           />
//         ))}
//       </Routes>
//     </HashRouter>
//   )
// }
// src/App.tsx
import React from 'react';
import './index.css';
import CarList from './components/CarList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Car Inventory</h1>
      </header>
      <CarList />
    </div>
  );
};

export default App;

