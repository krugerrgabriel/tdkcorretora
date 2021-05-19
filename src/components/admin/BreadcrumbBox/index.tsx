import React from "react";
import { Link } from "gatsby";

import { Body, NewBreadcrumb, AddIcon } from "./styles";

const BreadcrumbBox: React.FC<{
  map: any;
  register?: Boolean;
}> = props => {
  return (
    <Body>
      <NewBreadcrumb>
        {props.map.map(item => {
          return (
            <NewBreadcrumb.Item>
              <Link to={item.url}> {item.name} </Link>
            </NewBreadcrumb.Item>
          );
        })}
      </NewBreadcrumb>
      {props.register ? (
        <Link to="cadastro/">
          <AddIcon
            src="tdkcorretora_plus-circle-icon.svg"
            alt="TDK Corretora Add Icon"
          />
        </Link>
      ) : null}
    </Body>
  );
};

export default BreadcrumbBox;
