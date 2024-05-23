import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "../components/pages/main";
import { Request } from "../components/pages/create";
import { FEFUAuthorization } from "../components/pages/fefu_authorization";
import styles from "./index.module.scss";
import { useAppSelector } from "../store/hooks/redux";

const App: React.FC = () => {

  // navigation 

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const reduxRequest = useAppSelector((state) => state.requestReduser);
  console.log(reduxRequest)

  const handleLogin = (val: boolean) => {
    setIsLoggedIn(val);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<FEFUAuthorization setAuth={handleLogin} />} />
        <Route path="/create" element={<Request />} />
      </Routes>
    </div>
  );
};

export default App;
