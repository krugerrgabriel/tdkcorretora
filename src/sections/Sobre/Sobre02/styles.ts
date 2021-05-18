import styled from 'styled-components';

import Image from '../../../components/Image';

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;

export const Employee = styled.div`
    height: 100%;
    width: 165px;

    position: relative;

    div.reveal{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: rgba(255, 255, 255, 0.85);

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        transition: 0.2s;

        opacity: 0;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            padding: 12px;

            width: 100%;
            height: 100%;

            text-align: center;

            p{
                color: ${(props) => props.theme.gray};

                font-size: 20px;
                font-weight: 900;
            }

            span{
                color: ${(props) => props.theme.gray};
                
                font-size: 14px;
                font-weight: 500;

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
`;

export const EmployeeImage = styled(Image)`
    width: 100%;
    height: auto;
`;