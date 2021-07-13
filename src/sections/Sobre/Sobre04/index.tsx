import React from "react";

import { Body, Title } from "../../../styles/elements";
import {
  Box,
  Info,
  NewContainer,
  LayerMap,
  MapPin,
  BubbleImage,
} from "./styles";

const Sobre04: React.FC = () => {
  const MapPins = [
    { name: "Unidade Transdesk Aracajú", identify: "aracaju" },
    { name: "Unidade Transdesk Feira de Santana", identify: "feiraDeSantana" },
    { name: "Unidade Transdesk Porto Velho", identify: "portoVelho" },
    { name: "Unidade Transdesk Vilhena", identify: "vilhena" },
    { name: "Unidade Transdesk Sinop", identify: "sinop" },
    {
      name: "Unidade Transdesk Lucas do Rio Verde",
      identify: "lucasDoRioVerde",
    },
    { name: "Unidade Transdesk Cuiabá", identify: "cuiaba" },
    { name: "Unidade Transdesk Rondonópolis", identify: "rondonopolis" },
    { name: "Unidade Transdesk Rio Verde", identify: "rioVerde" },
    { name: "Unidade Transdesk Dourados", identify: "dourados" },
    {
      name: "Unidade Transdesk São Bernardo do Campo",
      identify: "saoBernardoDoCampo",
    },
    { name: "Unidade Transdesk Guarapuava", identify: "guarapuava" },
    { name: "Unidade Transdesk Ponta Grossa", identify: "pontaGrossa" },
    { name: "Unidade Transdesk Londrina", identify: "londrina" },
    { name: "Unidade Transdesk Maringá", identify: "maringa" },
    {
      name: "Unidade Transdesk Itapejara D'Oeste",
      identify: "itaperajaraDOeste",
    },
    { name: "Unidade Transdesk Cascavel", identify: "cascavel" },
    { name: "Unidade Transdesk Curitiba", identify: "curitiba" },
    { name: "Unidade Transdesk Chapecó", identify: "chapeco" },
    { name: "Unidade Transdesk Joinville", identify: "joinville" },
    { name: "Unidade Transdesk Itajaí", identify: "itajai" },
  ];

  return (
    <>
      <Body id="TDK Corretora de Seguros">
        <NewContainer className="seguro">
          <Box>
            <div className="layer">
              <LayerMap
                src="tdkcorretora_seguros_map.svg"
                alt="TDK Corretora de Seguros Mapa de Abrangência"
              />
              {MapPins.map((pin, index) => {
                return (
                  <a href="#!" className={pin.identify} key={index}>
                    <MapPin
                      src="tdkcorretora_seguros_map-pin.svg"
                      alt={`TDK Corretora de Seguros Pin ${pin.name}`}
                    />
                    <div className="bubble">
                      <p>{pin.name}</p>
                      <BubbleImage
                        src="tdkcorretora_seguros_bubble.svg"
                        alt="TDK Corretora de Seguros Bubble"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
            <Info>
              <Title margin="0 0 12px 0" color="yellow">
                ÁREA DE ATUAÇÃO
              </Title>
              <span>
                Nossos atendimentos, acompanhamentos e prospecções são
                realizadas pelos consultores das{" "}
                <strong>Unidades Transdesk do Brasil</strong>.
                <br />
                <br />A <strong>TDK</strong> realiza as cotações e a
                comercialização dos seguros, em todas as companhias, buscando o
                melhor custo-benefício para os nossos clientes.
              </span>
            </Info>
          </Box>
        </NewContainer>
      </Body>
    </>
  );
};

export default Sobre04;
