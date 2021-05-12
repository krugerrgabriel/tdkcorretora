export interface IInput{
    type: String;
    name: String;
    icon: String;
    handleChange: Function;
    value: String;
    maxChar?: String;
    color: String;
}

export interface ISelect{
    name: String;
    icon: String;
    options: [];
    handleChange: Function;
}

export interface ITextarea{
    name: String;
    icon: String;
    handleChange: Function;
}