export interface noticiaInterface{
    title: String;
    description: String;
    descriptionMinimized: String;
    image: String;
    createdAt: Date;
    save: Function;
}

export interface reqNoticiaInterface{
    userId: String;
    body: {
        title: String;
        description: String;
        descriptionMinimized: String;
        image: String;
        createdAt: Date;
    }
    params: {
        noticiaId: String;
    }
}