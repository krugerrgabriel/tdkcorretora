import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../components/Navbar";
import Sitemap from "../components/Sitemap";
import MapArrows from "../components/MapArrows";
import Seo from "../components/Seo";

import Inicio from "../sections/Inicio";
import Seguros from "../sections/Seguros";
import Seguro01 from "../sections/Seguro/Seguro01";
import Seguro02 from "../sections/Seguro/Seguro02";
import Seguro03 from "../sections/Seguro/Seguro03";
import Seguro04 from "../sections/Seguro/Seguro04";
import Sobre01 from "../sections/Sobre/Sobre01/";
import Part02 from "../sections/Sobre/Sobre01/Part02";
import Sobre02 from "../sections/Sobre/Sobre02/";
import Sobre03 from "../sections/Sobre/Sobre03/";
import Sobre04 from "../sections/Sobre/Sobre04/";
import Contato from "../sections/Contato";
import Noticias from "../sections/Noticias";
import Parceiros from "../sections/Parceiros";

import segurosJSON from "../assets/json/seguros.json";

import { Element, FullImage } from "../styles/elements";

const Home: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState("nothing");
  const [numberPage, setNumberPage] = useState(0);
  const [move, setMove] = useState("");
  const [seguros, setSeguros] = useState([]);
  const [logo, setLogo] = useState("white");

  const getData = async () => {
    let response = await fetch("../assets/json/seguros.json");
    setSeguros(await response.json());
  };

  useEffect(() => {
    // setSeguros(segurosJSON);
    document.getElementById("___loader").style.transition = "all 1s";
    document.getElementById("___loader").style.opacity = 0;
    document.getElementById("___loader").style.display = "none";
  }, []);

  return (
    <>
      <Seo />
      <Navbar handlePage={data => setPage(data)} logo={logo} />
      <Sitemap
        activeTab={tab}
        handlePage={data => setPage(data)}
        // @ts-ignore
        seguros={seguros}
      />
      <MapArrows
        handlePage={data => setMove(data)}
        logo={logo}
        page={numberPage}
      />
      {/* <ChatBot
        floating={true}
        steps={[
          {
            id: "1",
            message: "Ol?? :D Como posso te ajudar?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: 1, label: "Quero sei l?? o que", trigger: "3" },
              { value: 2, label: "Quero tal coisa", trigger: "4" },
              { value: 3, label: "Quero quero", trigger: "5" },
            ],
          },
          {
            id: "3",
            message: "Voc?? quer sei l?? o que?",
            trigger: "2",
          },
          {
            id: "4",
            message: "Voc?? quer tal coisa?",
            trigger: "2",
          },
          {
            id: "5",
            message: "Quero quero!",
            trigger: "2",
          },
        ]}
      /> */}
      <ReactFullpage
        licenseKey="GPLv3"
        anchors={[
          "inicio",
          // "seguros",
          // "seguro-transporte",
          // "seguro-vida",
          // "seguro-residencial",
          // "seguro-ambiental",
          // "seguro-patrimonial",
          // "sobre",
          // "contato",
          // "noticias",
          // "parceiros",
        ]}
        scrollingSpeed={750}
        onLeave={(origin, destination, direction) => {
          setTab(destination.index);
          setNumberPage(destination.index);
          switch (destination.index) {
            case 0:
              setLogo("white");
              break;
            case 1:
              setLogo("white");
              break;
            case 2:
              setLogo("colorized");
              break;
            case 3:
              setLogo("colorized");
              break;
            case 4:
              setLogo("white");
              break;
            case 6:
              setLogo("white");
              break;
            // case 6:
            //   setLogo("white");
            //   break;
            // case 3:
            //   setLogo("white");
            //   break;
            // case 4:
            //   setLogo("colorized");
            //   break;
            // case 5:
            //   setLogo("white");
            //   break;
            // case 6:
            //   setLogo("colorized");
            //   break;
          }
        }}
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
            case "seguro-transporte":
              fullpageApi.moveTo("seguro-transporte");
              setPage("nothing");
              break;
            // case "seguro-vida":
            //   fullpageApi.moveTo("seguro-vida");
            //   setPage("nothing");
            //   break;
            // case "seguro-residencial":
            //   fullpageApi.moveTo("seguro-residencial");
            //   setPage("nothing");
            //   break;
            // case "seguro-ambiental":
            //   fullpageApi.moveTo("seguro-ambiental");
            //   setPage("nothing");
            //   break;
            // case "seguro-patrimonial":
            //   fullpageApi.moveTo("seguro-patrimonial");
            //   setPage("nothing");
            //   break;
            case "sobre":
              fullpageApi.moveTo("sobre");
              setPage("nothing");
              break;
            case "contato":
              fullpageApi.moveTo("contato");
              setPage("nothing");
              break;
            // case "noticias":
            //   fullpageApi.moveTo("noticias");
            //   setPage("nothing");
            //   break;
            case "parceiros":
              fullpageApi.moveTo("parceiros");
              setPage("nothing");
              break;
            default:
              setPage("nothing");
              break;
          }
          switch (move) {
            case "up":
              fullpageApi.moveSectionUp();
              setMove("");
              break;
            case "down":
              fullpageApi.moveSectionDown();
              setMove("");
              break;
          }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Inicio />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;
