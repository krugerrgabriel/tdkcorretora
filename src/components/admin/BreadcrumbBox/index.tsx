import React from "react";
import { Link } from "gatsby";

import { Body, NewBreadcrumb } from "./styles";

const BreadcrumbBox: React.FC<{
  map: any;
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
    </Body>
  );
};

export default BreadcrumbBox;
