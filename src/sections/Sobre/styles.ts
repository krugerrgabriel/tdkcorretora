import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const NewContainer = styled(Container)<{ alignitems?: Boolean; }>`
    display: flex;
    ${(props) => props.alignitems ? 'align-items: center;' : null};
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;