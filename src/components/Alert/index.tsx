import React from "react";

import { Button } from "../../styles/elements";

import { Overlay, Corpse } from "./styles";

const Alert: React.FC<{
  id?: Number;
  active: Boolean;
  options: Boolean;
  message: String;
  handleCallback?: Function;
  handleClose: Function;
}> = props => {
  if (props.active) {
    return (
      <>
        <Overlay onClick={() => props.handleClose()}></Overlay>
        <Corpse>
          <div className="content">
            <span> AVISO </span>
            <p> {props.message} </p>
          </div>
          <div className="buttons">
            {props.options ? (
              <>
                <Button
                  width={48}
                  color="gray"
                  onClick={() => props.handleCallback(props.id)}
                >
                  SIM
                </Button>
                <Button
                  width={48}
                  color="gray"
                  onClick={() => props.handleClose()}
                >
                  NÃO
                </Button>
              </>
            ) : (
              <Button
                width={100}
                color="gray"
                onClick={() => props.handleClose()}
              >
                FECHAR
              </Button>
            )}
          </div>
        </Corpse>
      </>
    );
  } else {
    return null;
  }
};

export default Alert;
