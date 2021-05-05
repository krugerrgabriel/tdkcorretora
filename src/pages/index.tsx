import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Inicio from "../sections/Inicio";
import Seguros from "../sections/Seguros";
import Seguro from "../sections/Seguro";
import Sobre from "../sections/Sobre";
import Contato from "../sections/Contato";
import Noticias from "../sections/Noticias";
import Parceiros from "../sections/Parceiros";

const Home: React.FC = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Inicio />
              </div>

              <div className="section">
                <Seguros />
              </div>

              <div className="section">
                <Seguro seguroId={2} />
              </div>

              <div className="section">
                <Sobre />
              </div>

              <div className="section">
                <Contato />
              </div>

              <div className="section">
                <Noticias />
              </div>

              <div className="section">
                <Parceiros />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;
