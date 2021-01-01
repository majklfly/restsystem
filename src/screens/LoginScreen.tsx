import React from "react";

import { Background } from "../components/Background/Background";
import { LoginContainer } from "../containers/LoginContainer/LoginContainer";

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  return (
    <div>
      <Background />
      <LoginContainer />
    </div>
  );
};

export default LoginScreen;
