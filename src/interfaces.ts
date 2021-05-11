export interface ISeguro{
    seguro: {
        _id: String;
        title: String;
        information: String;
        description: String;
        salePhrase: String;
        pins: [
            {
                _id: String;
                name: String;
            }
        ];
        coverage: [
            {
                _id: String;
                image: String;
                title: String;
                description: String;
            }
        ];
        assistance: [
            {
                _id: String;
                icon: String;
                title: String;
                description: String;
            }
        ];
        questions: [
            {
                _id: String;
                question: String;
                answer: String;
            }
        ];
        icon: String;
        createdAt: String;
    }
    
}

export interface IPropSeguro{
    props: {
        _id: String;
        title: String;
        information: String;
        description: String;
        salePhrase: String;
        pins: [
            {
                _id: String;
                name: String;
            }
        ];
        coverage: [
            {
                _id: String;
                image: String;
                title: String;
                description: String;
            }
        ];
        assistance: [
            {
                _id: String;
                icon: String;
                title: String;
                description: String;
            }
        ];
        question: [
            {
                _id: String;
                question: String;
                answer: String;
            }
        ];
        icon: String;
        createdAt: String;
    }
}