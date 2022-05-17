import logo from './logo.svg';
import './App.css';
import "./style/styless.css";
import RoutersDom from './RoutersDom';
import Sidebar from './Sidebar';
import FooterImg from './toplam/FooterImg';
function App() {
  return (
    <div className="App">
      <RoutersDom />
      <Sidebar />
      <FooterImg />
    </div>
  );
}

export default App;
