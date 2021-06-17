import React from "react";
import PropTypes from "prop-types";

import "./animation.css";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title> TDK Corretora </title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "#7C7C7B",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            transition: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="brasao"
            width="150"
            fill="#FFCC00"
            viewBox="0 0 129.881 148.719"
          >
            <animate
              attributeName="fill"
              values="#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF;#FFCC00;#FFFFFF"
              dur="22s"
              repeatCount="indefinite"
            />
            <g
              id="Grupo_157"
              data-name="Grupo 157"
              transform="translate(-74.176 0)"
            >
              <path
                id="Caminho_62"
                data-name="Caminho 62"
                d="M205.779,16.28a185.8,185.8,0,0,0-19.12-8.38,120.128,120.128,0,0,0-85.688,0,185.8,185.8,0,0,0-19.158,8.38L78.87,17.869V93c0,.884,1.176,21.876,23.051,34.563,19.553,11.333,38.852,19.854,39.66,20.211l2.229.94,2.22-.94c.818-.357,20.108-8.878,39.66-20.211C207.566,114.881,208.714,93.889,208.751,93V17.869ZM138.29,134.085c-7.42-3.517-19.177-9.33-30.81-16.082a35.334,35.334,0,0,1-14.991-16.252,30,30,0,0,1-2.568-9.17V24.6c4.3-2.078,9.32-4.223,14.991-6.377a108.748,108.748,0,0,1,33.378-7.035ZM197.71,92.6a29.486,29.486,0,0,1-2.379,8.737A35.334,35.334,0,0,1,180.151,118c-11.624,6.743-23.381,12.565-30.81,16.082V11.192a108.8,108.8,0,0,1,33.387,7.035c5.643,2.154,10.684,4.3,14.982,6.377Z"
                transform="translate(-4.694)"
              />
              <path
                id="Caminho_63"
                data-name="Caminho 63"
                d="M118.011,67.31,99.06,86.3l8,8.013,27.1-26.889L107.289,40.45l-8.145,8.1Z"
                transform="translate(-5.895 -2.407)"
              />
              <path
                id="Caminho_64"
                data-name="Caminho 64"
                d="M186.489,40.3,159.61,67.32l26.823,26.964,8.079-8.079-18.819-18.96L194.53,48.4Z"
                transform="translate(-9.499 -2.398)"
              />
            </g>
          </svg>
          <p
            style={{
              marginTop: "36px",
              lineHeight: "32px",
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: "500",
              zIndex: 999,
              transition: 1,
            }}
          >
            {" "}
            Carregando...
            <br />
            Por favor aguarde :)
          </p>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
