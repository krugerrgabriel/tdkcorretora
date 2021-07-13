import styled from 'styled-components';

export const Box = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{

        p{
            color: ${(props) => props.theme.yellow};

            font-size: 86px;
            font-weight: 900;

            text-align: center;

            margin-bottom: 0;
        }

        span{
            color: ${(props) => props.theme.white};

            font-size: 20px;
            font-weight: 800;

            letter-spacing: 6px;

            text-align: center;
        }
    }

    @media(max-width: 1280px) {
        div{
            p{
                font-size: 68px;
            }

            span{
                font-size: 16px;
            }
        }
    }
`;