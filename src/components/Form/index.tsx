import React, { useState } from "react";
import InputMask from "react-input-mask";

import { Corpse, InputText, InputIcon } from "./styles";

import { IInput, ISelect, ITextarea } from "./interfaces";

export const Input: React.FC<IInput> = props => {
  const [active, setActive] = useState(false);

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

  return (
    // @ts-ignore
    <Corpse color={props.color}>
      {/* @ts-ignore */}
      <InputText color={props.color} active={active}>
        {props.name}
      </InputText>
      <InputIcon src={props.icon} alt={`TDK Corretora ${props.type} Icon`} />
      <InputMask
        type={inputType}
        value={props.value}
        mask={maskType} // @ts-ignore
        onChange={event => handleKey(event.target.value)}
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

export const Select: React.FC<ISelect> = props => {
  const [active, setActive] = useState(false);
  return (
    <Corpse>
      <InputText active={active}>{props.name}</InputText>
      <InputIcon src={props.icon} />
      <select
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
        <option value="" selected disabled></option>
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
  return (
    <Corpse>
      <InputText active={active}>{props.name}</InputText>
      <InputIcon src={props.icon} />
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
