export interface reqProjectInterface{
    userId: String;
    body: {
        title: String;
        description: String;
        tasks: [{
            title: String;
            description: String;
        }]
    }
    params: {
        projectId: String;
    }
}

export interface projectInterface{
    _id: String;
    title: String;
    description: String;
    user: {
        _id: String;
        name: String;
        email: String;
        createdAt: Date;
    }
    tasks?: [{
        title: String;
        description: String;
    }];
    createdAt: Date;
    save: Function;
}