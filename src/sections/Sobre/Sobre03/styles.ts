import styled from 'styled-components';

export const Box = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{

        margin-top: 96px;

        p{
            color: ${(props) => props.theme.yellow};

            font-size: 96px;
            font-weight: 900;

            text-align: center;

            margin-bottom: 0;
        }

        span{
            color: ${(props) => props.theme.white};

            font-size: 24px;
            font-weight: 800;

            letter-spacing: 6px;

            text-align: center;
        }
    }
`;