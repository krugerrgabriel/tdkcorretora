import React from "react";

import { Body, ArrowImage } from "./styles";

const MapArrows: React.FC<{
  handlePage: Function;
  logo: String;
  page: Number;
}> = props => {
  var classDown;
  switch (props.page) {
    case 0:
      classDown = "smoothed";
      break;
    default:
      classDown = "noneDisplay";
      break;
  }
  return (
    <>
      <Body>
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
