import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "../components/pages/main";
import { Request } from "../components/pages/create";
import { format } from "@formkit/tempo"

import styles from "./index.module.scss";
import { FEFUAuthorization } from "../components/pages/fefu_authorization";

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

  useEffect(() => {
    const t = new Date()
    const l = 'default'
    console.log(format(t, "hh:mm", l))
  }, [])

  return (
    <div>
      <div className={styles.App}>

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
