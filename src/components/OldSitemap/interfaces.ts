export interface IOption{
    active: Boolean;
}

export interface ISitemap{
    activeTab: Number;
    handlePage: Function;
    seguros: {
        seguros: [
            {
                pageName: String;
                title: String;
            }
        ];
    };
}