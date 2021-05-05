import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../components/Navbar";
import Sitemap from "../components/Sitemap";

import Inicio from "../sections/Inicio";
import Seguros from "../sections/Seguros";
import Page01 from "../sections/Seguro/Page01";
import Page02 from "../sections/Seguro/Page02";
import Page03 from "../sections/Seguro/Page03";
import Page04 from "../sections/Seguro/Page04";
import Sobre from "../sections/Sobre";
import Contato from "../sections/Contato";
import Noticias from "../sections/Noticias";
import Parceiros from "../sections/Parceiros";

import { Element } from "../styles/elements";

const Home: React.FC = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Navbar />
      <Sitemap activeTab={tab} />
      <ReactFullpage
        scrollingSpeed={750}
        onLeave={(origin, destination, direction) => setTab(destination.index)}
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
                <Element
                  src="tdkcorretora_element-left.svg"
                  alt="TDK Corretora Element"
                  left={true}
                  top={true}
                  key={0}
                />
                <Element
                  src="tdkcorretora_element-right.svg"
                  alt="TDK Corretora Element"
                  right={true}
                  bottom={true}
                  key={1}
                />
                <div className="slide">
                  <Page01 seguroId={2} />
                </div>
                <div className="slide">
                  <Page02 seguroId={2} />
                </div>
                <div className="slide">
                  <Page03 seguroId={2} />
                </div>
                <div className="slide">
                  <Page04 seguroId={2} />
                </div>
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
