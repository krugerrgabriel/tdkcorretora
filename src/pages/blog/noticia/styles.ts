import styled from 'styled-components';

export const NoticiaImage = styled.img`
    width: 100%;
    height: auto;
`;

export const NoticiaDate = styled.span`
    color: ${(props) => props.theme.white};

    font-size: 14px;
    font-weight: 600;

    margin: 8px 0;
    
    opacity: 0.85;
`;

export const NoticiaTitle = styled.p`
    color: ${(props) => props.theme.yellow};

    font-size: 36px;
    font-weight: 700;

    line-height: 44px;

    text-transform: uppercase;

    margin: 0 0 24px 0;
`;

export const NoticiaMiniDescription = styled.span`
    color: ${(props) => props.theme.white};

    font-size: 20px;
    font-weight: 500;

    line-height: 20px;
`;

export const NoticiaDescription = styled.div`
    color: ${(props) => props.theme.white};

    font-size: 14px;
    font-weight: 500;

    margin-top: 24px;
    padding-bottom: 96px;
`;