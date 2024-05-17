import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "../components/pages/main";
import { Request } from "../components/pages/create";

import styles from "./index.module.scss";
import { FEFUAuthorization } from "../components/pages/fefu_authorization";
//import { useDispatch } from "react-redux";
//import { useAppSelector } from "../store/hooks/redux";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (val: boolean) => {
    setIsLoggedIn(val);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    } else {
      return navigate("/auth");
    }
  }, [isLoggedIn]);

  //const dispatch = useDispatch()
  //const {request} = useAppSelector(state => state.requestReduser)

  return (
    <div>
      <div className={styles.App}>
        <div>
        
        </div>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route
            element={<FEFUAuthorization setAuth={handleLogin} />}
            path="/auth"
          />
          <Route path="/create" element={<Request />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
