import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Authorization } from "../components/pages/authorization";
import { Main } from "../components/pages/main";
import { Request } from "../components/pages/request";

import styles from "./index.module.scss";
import { Header } from "../components/header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/")
    }
    else {
      return navigate("/auth")
    }
  }, [isLoggedIn])

  return (
    <div>
      <div className={styles.App}>
        
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Authorization setAuth={handleLogin}/>} path="/auth"/>
          <Route path="/req" element={<Request />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;