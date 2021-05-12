export interface seguroInterface {
    id: Number;
    title: String;
    information: String;
    description: String;
    salesPhrase: String;
    pageName: String;
    pins: [
        {
            name: String;
        }
    ];
    coverage: [
        {
            image: String;
            title: String;
            description: String;
        }
    ];
    assistance: [
        {
            icon: String;
            title: String;
            description: String;
        }
    ];
    questions: [
        {
            question: String;
            answer: String;
        }
    ];
    icon: String;
    createdAt: Date;
    save: Function;
}

export interface reqSeguroInterface {
    body: {
        id: Number;
        title: String;
        information: String;
        description: String;
        salesPhrase: String;
        pageName: String;
        pins: [
            {
                name: String;
            }
        ];
        coverage: [
            {
                image: String;
                title: String;
                description: String;
            }
        ];
        assistance: [
            {
                icon: String;
                title: String;
                description: String;
            }
        ];
        questions: [
            {
                question: String;
                answer: String;
            }
        ];
        icon: String;
        createdAt: Date;
        save: Function;
    },
    params: {
        seguroId: String;
    }
}