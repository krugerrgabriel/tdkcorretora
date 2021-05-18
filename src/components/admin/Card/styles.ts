import styled from 'styled-components';

import Image from '../../Image';

export const Body = styled.div<{ clickable: Boolean; }>`
    background-color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
    height: 102px;

    padding: 18px 24px;

    border-radius: 3px;

    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);

    transition: 0.2s;

    &:hover{
        ${(props) => props.clickable ? 'transform: scale(1.01);' : null};
    }
    &:active{
        ${(props) => props.clickable ? 'transform: scale(0.99);' : null};
    }
`;

export const Icon = styled(Image)`
    height: 62px;
    width: auto;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 75%;

    margin: 18px 0;

    p{
        color: ${(props) => props.theme.gray};

        font-size: 20px;
        font-weight: 500;

        text-transform: uppercase;

        margin: 4px 0 -8px 0;
    }

    span{
        color: ${(props) => props.theme.gray};

        font-size: 36px;
        font-weight: 700;
    }
`;