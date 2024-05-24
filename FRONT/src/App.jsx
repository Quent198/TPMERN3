import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserProvider from "./components/Providers/UserProvider";


function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <UserProvider><Header />
      <div className="d-flex flex-fill">
        <Outlet />
      </div>
      <Footer /></UserProvider>
      
    </div>
  );
}
export default App;
