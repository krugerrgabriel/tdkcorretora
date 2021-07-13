import styled from 'styled-components';

import { Container, Col } from 'react-bootstrap';
import Image from '../../../components/Image';

export const NewCol = styled(Col)``;

export const NewContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    ${NewCol}{
        margin: 12px 0;
    }
`;

export const EmployeeDiv = styled.div`
  flex: 0 1 calc(20%);
`;

export const Employee = styled.div`
    height: 100%;
    width: 152px;

    position: relative;

    margin: 12px 0;

    div.reveal{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: rgba(124, 124, 123, 0.65);

        backdrop-filter: blur(3px);

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 177.69px;

        transition: 0.2s;

        opacity: 0;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            padding: 8px;

            width: 100%;
            height: 100%;

            text-align: center;

            p{
                color: ${(props) => props.theme.yellow};

                font-size: 15px;
                font-weight: 800;

                line-height: 17px;
            }

            span{
                color: ${(props) => props.theme.white};
                
                font-size: 12px;
                font-weight: 500;

                line-height: 14px;

                letter-spacing: 0.1px;

                margin-top: 6px;
            }
        }
    }

    &:hover{
        div.reveal{
            opacity: 1;
        }
    }

    @media(max-width: 1280px) {
        &{
            width: 124px;
        }
    }
`;

export const EmployeeImage = styled(Image)`
    width: 100%;
    height: auto;

    border: 3px solid ${(props) => props.theme.gray};
    border-radius: 2px;
`;