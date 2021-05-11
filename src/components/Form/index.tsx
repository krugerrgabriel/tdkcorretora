import React, { useState } from "react";

import { Corpse, InputText, InputIcon } from "./styles";

import { IInput, ISelect, ITextarea } from "./interfaces";

export const Input: React.FC<IInput> = props => {
  const [active, setActive] = useState(false);

  let inputType = null;
  if (props.type == "phone") {
    inputType = "text";
  } else {
    inputType = props.type;
  }
  return (
    <Corpse>
      <InputText active={active}>{props.name}</InputText>
      <InputIcon src={props.icon} alt={`TDK Corretora ${props.type} Icon`} />
      <input
        type={inputType} // @ts-ignore
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
        <option value="" defaultValue disabled></option>
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
