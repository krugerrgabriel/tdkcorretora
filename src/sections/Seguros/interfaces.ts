export interface ISeguros{
    page: String;
    seguros: {
        errorcode: String;
        seguros: {
            map?: Function;
        };
    };
    fullpageApi: {
        moveTo: Function;
    };
}