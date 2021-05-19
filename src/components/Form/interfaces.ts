export interface IInput{
    type: String;
    name: String;
    icon: String;
    handleChange: Function;
    value: String;
    maxChar?: String;
    color: String;
    layer?: Boolean;
    contact?: Boolean;
}

export interface ISelect{
    name: String;
    icon: String;
    options: [];
    handleChange: Function;
    contact?: Boolean;
}

export interface ITextarea{
    name: String;
    icon: String;
    color?: String;
    handleChange: Function;
    contact?: Boolean;
}