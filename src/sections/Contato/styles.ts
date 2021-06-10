import styled from 'styled-components';

import { Container } from '../../styles/elements';

import Image from '../../components/Image';

export const Inputs = styled.div<{ align?: String; }>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.align ? 'flex-end' : 'center'};
    flex-direction: row;

    width: 100%;
`;

export const PhoneIcon = styled(Image)`
    width: 30%;
    height: auto;
`;

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Form = styled.form`
    background-color: rgba(0, 0, 0, 0.35);

    padding: 48px 64px;

    border-radius: 14px;
`;