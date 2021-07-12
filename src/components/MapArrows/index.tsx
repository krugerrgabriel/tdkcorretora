import React from "react";

import { Body, ArrowImage } from "./styles";

const MapArrows: React.FC<{
  handlePage: Function;
  logo: String;
  page: Number;
}> = props => {
  var classUp, classDown;
  switch (props.page) {
    case 0:
      classUp = "noneDisplay";
      classDown = "smoothed";
      break;
    case 10:
      classUp = "smoothed";
      classDown = "noneDisplay";
      break;
    default:
      classUp = "";
      classDown = "";
      break;
  }
  console.log(props.page);
  return (
    <>
      <Body>
        <ArrowImage
          src={`tdkcorretora_up-arrow-${props.logo}.svg`}
          alt="TDK Corretora de Seguros Arrow Branca"
          onClick={() => props.handlePage("up")}
          className={classUp}
        />
        <ArrowImage
          src={`tdkcorretora_down-arrow-${props.logo}.svg`}
          alt="TDK Corretora de Seguros Arrow Branca"
          onClick={() => props.handlePage("down")}
          className={classDown}
        />
      </Body>
    </>
  );
};

export default MapArrows;
