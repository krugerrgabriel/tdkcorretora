import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../components/Navbar";
import Sitemap from "../components/Sitemap";

import Inicio from "../sections/Inicio";
import Seguros from "../sections/Seguros";
import Seguro01 from "../sections/Seguro/Seguro01";
import Seguro02 from "../sections/Seguro/Seguro02";
import Seguro03 from "../sections/Seguro/Seguro03";
import Seguro04 from "../sections/Seguro/Seguro04";
import Sobre01 from "../sections/Sobre/Sobre01";
import Sobre02 from "../sections/Sobre/Sobre02";
import Contato from "../sections/Contato";
import Noticias from "../sections/Noticias";
import Parceiros from "../sections/Parceiros";

import { Element } from "../styles/elements";

const Home: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState("nothing");
  const [seguros, setSeguros] = useState([]);

  const getData = async () => {
    let response = await fetch("http://localhost:3001/seguros");
    setSeguros(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar handlePage={data => setPage(data)} />
      <Sitemap
        activeTab={tab}
        handlePage={data => setPage(data)}
        seguros={seguros}
      />
      <ReactFullpage
        anchors={[
          "inicio",
          "seguros",
          "seguro-transporte",
          "seguro-vida",
          "seguro-patrimonial",
          "sobre",
          "contato",
          "noticias",
          "parceiros",
        ]}
        scrollingSpeed={750}
        onLeave={(origin, destination, direction) => setTab(destination.index)}
        render={({ state, fullpageApi }) => {
          switch (page) {
            case "inicio":
              fullpageApi.moveTo("inicio");
              setPage("nothing");
              break;
            case "seguros":
              fullpageApi.moveTo("seguros");
              setPage("nothing");
              break;
            case "seguro-patrimonial":
              fullpageApi.moveTo("seguro-patrimonial");
              setPage("nothing");
              break;
            case "seguro-vida":
              fullpageApi.moveTo("seguro-vida");
              setPage("nothing");
              break;
            case "seguro-transporte":
              fullpageApi.moveTo("seguro-transporte");
              setPage("nothing");
              break;
            case "sobre":
              fullpageApi.moveTo("sobre");
              setPage("nothing");
              break;
            case "contato":
              fullpageApi.moveTo("contato");
              setPage("nothing");
              break;
            case "noticias":
              fullpageApi.moveTo("noticias");
              setPage("nothing");
              break;
            case "parceiros":
              fullpageApi.moveTo("parceiros");
              setPage("nothing");
              break;
            default:
              setPage("nothing");
              break;
          }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Inicio />
              </div>

              <div className="section">
                {/* @ts-ignore */}
                <Seguros seguros={seguros} />
              </div>

              {/* @ts-ignore */}
              {seguros.errorcode == "none" /* @ts-ignore */
                ? seguros.seguros.map((seguro, index) => {
                    return (
                      <div className="section" key={index}>
                        <Element
                          src="tdkcorretora_element-left.svg"
                          alt="TDK Corretora Element"
                          left="true"
                          top="true"
                          key={0}
                        />
                        <Element
                          src="tdkcorretora_element-right.svg"
                          alt="TDK Corretora Element"
                          right="true"
                          bottom="true"
                          key={1}
                        />

                        <div className="slide">
                          <Seguro01 seguro={seguro} />
                        </div>
                        <div className="slide">
                          <Seguro02 seguro={seguro} />
                        </div>
                        <div className="slide">
                          <Seguro03 />
                        </div>
                        <div className="slide">
                          <Seguro04 seguro={seguro} />
                        </div>
                      </div>
                    );
                  })
                : null}

              <div className="section">
                <div className="slide">
                  <Sobre01 />
                </div>
                <div className="slide">
                  <Sobre02 />
                </div>
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
