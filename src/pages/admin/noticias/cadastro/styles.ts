import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const NewContainer = styled(Container)``;

export const Title = styled.p`
    color: ${(props) => props.theme.white};

    font-size: 28px;
    font-weight: 700;

    text-align: center;
`;

export const Description = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.white};
    
    font-size: 22px;
    font-weight: 400;

    line-height: 26px;

    text-align: center;

    margin-bottom: 64px;
`;

export const Margin = styled.div`
    margin-bottom: 24px;
`;