import styled from 'styled-components';

export const Body = styled.div<{ auto?: Boolean; }>`
    background-color: ${(props) => props.theme.gray};

    width: 100vw;
    height: ${(props) => props.auto ? 'auto' : '100vh'};

    padding-top: 128px;
`;