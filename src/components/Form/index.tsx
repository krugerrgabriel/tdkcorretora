import React, { useState, useRef } from "react";
import InputMask from "react-input-mask";

import {
  Corpse,
  InputText,
  InputIcon,
  Box,
  Layer,
  Placeholder,
} from "./styles";

import { IInput, ISelect, ITextarea } from "./interfaces";

export const Input: React.FC<IInput> = props => {
  const [active, setActive] = useState(false);

  let layer = props.layer ? false : true;

  let maskType,
    inputType = null;
  if (props.type == "phone") {
    maskType = "(99) 9 9999-9999";
    inputType = "text";
  } else {
    maskType = null;
    inputType = props.type;
  }

  const handleKey = data => {
    if (Number(props.maxChar)) {
      if (data.length > Number(props.maxChar)) {
        props.handleChange(data.slice(0, -1));
      } else {
        props.handleChange(data);
      }
    } else {
      props.handleChange(data);
    }
  };

  let contactSection = props.contact ? true : false;

  return (
    // @ts-ignore
    <Corpse color={props.color}>
      <InputText /* @ts-ignore */
        color={props.color}
        active={active}
        layer={layer}
        contact={contactSection}
      >
        {props.name}
      </InputText>
      <InputIcon
        src={props.icon}
        alt={`TDK Corretora de Seguros ${props.type} Icon`}
      />
      <InputMask
        type={inputType}
        value={props.value}
        mask={maskType} // @ts-ignore
        onChange={event => handleKey(event.target.value)}
        onFocus={() => setActive(true)}
        name={props.name}
        onBlur={event => {
          if (
            event.target.value == null ||
            event.target.value == undefined ||
            event.target.value == "" ||
            event.target.value == " "
          ) {
            event.target.value = null;
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      />
    </Corpse>
  );
};

export const Select: React.FC<ISelect> = props => {
  const [active, setActive] = useState(false);

  let contactSection = props.contact ? true : false;
  return (
    <Corpse>
      <InputText active={active} contact={contactSection}>
        {props.name}
      </InputText>
      <InputIcon src={props.icon} alt="TDK Corretora de Seguros" />
      <select /* @ts-ignore */
        value={props.value}
        onChange={event => props.handleChange(event.target.value)}
        onFocus={() => setActive(true)}
        onBlur={event => {
          if (
            event.target.value == null ||
            event.target.value == undefined ||
            event.target.value == "" ||
            event.target.value == " "
          ) {
            event.target.value = null;
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        {/* @ts-ignore */}
        <option value="" disabled></option>
        {props.options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </Corpse>
  );
};

export const Textarea: React.FC<ITextarea> = props => {
  const [active, setActive] = useState(false);

  let color = props.color ? props.color : "white";
  let contactSection = props.contact ? true : false;
  return (
    <Corpse color={`${color}`}>
      <InputText active={active} contact={contactSection}>
        {props.name}
      </InputText>
      <InputIcon src={props.icon} alt="TDK Corretora de Seguros" />
      <textarea // @ts-ignore
        onKeyUp={event => props.handleChange(event.target.value)}
        onFocus={() => setActive(true)}
        onBlur={event => {
          if (
            event.target.value == null ||
            event.target.value == undefined ||
            event.target.value == "" ||
            event.target.value == " "
          ) {
            event.target.value = null;
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      />
    </Corpse>
  );
};

export const FileInput: React.FC<{ fileChange: Function }> = props => {
  const fileElement = useRef(null);
  const placeholderElement = useRef(null);
  const onChange = event => {
    placeholderElement.current.innerHTML = event.target.files[0].name;
    props.fileChange(event.target.files[0]);
  };
  return (
    <>
      <Box onClick={() => fileElement.current.click()}>
        <Layer>IMAGEM</Layer>
        <Corpse halfWidth>
          <Placeholder ref={placeholderElement}>
            Selecione uma imagem
          </Placeholder>
        </Corpse>
        <input
          type="file"
          ref={fileElement}
          name="file"
          onChange={event => onChange(event)}
        />
      </Box>
    </>
  );
};
