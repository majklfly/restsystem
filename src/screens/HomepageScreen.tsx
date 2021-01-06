import React from "react";

import { Background } from "../components/Background/Background";
import { MainContentContainer } from "../containers/MainContentContainer/MainContentContainer";

interface Props {}

const HomepageScreen: React.FC<Props> = () => {
  return (
    <div>
      <Background />
      <MainContentContainer />
    </div>
  );
};

export default HomepageScreen;
