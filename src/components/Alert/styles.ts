import styled from 'styled-components';

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.75);

    backdrop-filter: blur(2px);

    width: 100vw;
    height: 100vh;
    
    top: 0;
    left: 0;
    position: absolute;

    z-index: 998;
`;

export const Corpse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: ${(props) => props.theme.yellow};

    top: 20%;
    left: calc(50% - 250px);
    position: absolute;

    width: 500px;
    height: 350px;

    padding: 48px 64px;

    border-radius: 2px;

    box-shadow: 4px 4px 12px 0px rgba(0,0,0,0.3);
    -webkit-box-shadow: 4px 4px 12px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 4px 4px 12px 0px rgba(0,0,0,0.3);

    z-index: 999;

    div.content{
        text-align: center;

        span{
            color: ${(props) => props.theme.white};

            font-size: 32px;
            font-weight: 700;

            letter-spacing: 0.5px;
        }

        p{
            color: ${(props) => props.theme.gray};

            font-size: 28px;
            font-weight: 500;

            line-height: 32px;
        }
    }

    div.buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    }
`;