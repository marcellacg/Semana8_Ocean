// import React from 'react';
// import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
// import './App.css';

// import Manatee from '../Manatee/Manatee';
// import Narwhal from '../Narwhal/Narwhal';
// import Whale from '../Whale/Whale';

// function App() {
//   return (
//     <div className="wrapper">
//       <h1>Marine Mammals</h1>
//       <Router>
//       <nav>
//           <ul>
//             <li><Link to="/manatee">Manatee</Link></li>
//             <li><Link to="/narwhal">Narwhal</Link></li>
//             <li><Link to="/whale">Whale</Link></li>
//             <li><Link to="/whale/beluga">Beluga Whale</Link></li>
//             <li><Link to="/whale/blue">Blue Whale</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/manatee"
//           element={<Manatee/>} />
//           <Route path="/narwhal"
//           element={<Narwhal/>} />
//           <Route path="/whale"
//           element={<Whale/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;