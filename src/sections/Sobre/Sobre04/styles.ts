import styled from 'styled-components';

import Image from '../../../components/Image';

import { Container } from '../../../styles/elements';

export const NewContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const LayerMap = styled(Image)``;

export const MapPin = styled(Image)`
    position: absolute;
`;

export const BubbleImage = styled(Image)`
    position: absolute;

    top: 0;
    left: 0;

    z-index: 10;
`;

export const Info = styled.div`
    position: absolute;

    left: 0;
    bottom: 10%;
    
    width: 464px;
`;

export const Box = styled.div<{ left?: Boolean; }>`
    ${(props) => props.left ? 'height: 50%' : null};
    ${(props) => props.left ? 'margin-right: 24px;' : null};

    position: relative;

    span{
        color: ${(props) => props.theme.white};

        font-size: 20px;
        font-weight: 400;

        line-height: 32px;
    }

    div.layer{
        position: relative;

        margin-left: 236px;

        a{
            position: absolute;

            color: ${(props) => props.theme.black};

            cursor: default;

            ${MapPin}{
                cursor: default;

                transition: 0.2s;

                &:hover{
                    transform: scale(1.1);

                    z-index: 5;
                }

                &:hover + div.bubble{
                    width: 100px;
                    height: 50px;

                    opacity: 1;

                    p{
                        font-size: 11px;

                        opacity: 1;
                    }

                    ${BubbleImage}{
                        width: 125px;
                        height: 64px;
                    }
                }
            }

            div.bubble{
                position: absolute;

                top: -68px;
                left: -53px;
                right: 0;

                width: 0;
                height: 0;

                opacity: 0;

                p{
                    font-size: 0;
                    font-weight: 600;

                    text-align: center;

                    width: 100%;

                    position: absolute;
                    left: 12px;
                    top: 6px;

                    opacity: 0;

                    transition: 0;

                    z-index: 11;
                }

                ${BubbleImage}{
                    width: 0;
                    height: 0;
                }

                transition: 0.1s;

                z-index: 10;
            }

            &.aracaju{
                right: 56px;
                top: 242px;
            }
            &.feiraDeSantana{
                right: 78px;
                top: 264px;
            }
            &.portoVelho{
                top: 208px;
                left: 166px;
            }
            &.vilhena{
                top: 274px;
                left: 212px;
            }
            &.sinop{
                top: 248px;
                left: 316px;
            }
            &.lucasDoRioVerde{
                top: 274px;
                left: 296px;
            }
            &.cuiaba{
                top: 304px;
                left: 306px;
            }
            &.rondonopolis{
                top: 334px;
                left: 322px;
            }
            &.rioVerde{
                top: 368px;
                left: 378px;
            }
            &.dourados{
                top: 428px;
                left: 322px;
            }
            &.saoBernardoDoCampo{
                top: 458px;
                left: 436px;
            }
            &.guarapuava{
                top: 498px;
                left: 370px;
            }
            &.pontaGrossa{
                top: 490px;
                right: 270px;
            }
            &.londrina{
                top: 461px;
                left: 382px;
            }
            &.maringa{
                top: 464px;
                left: 358px;
            }
            &.itaperajaraDOeste{
                top: 504px;
                left: 356px;

                z-index: 2;
            }
            &.cascavel{
                top: 488px;
                left: 341px;

                z-index: 1;
            }
            &.curitiba{
                top: 498px;
                right: 254px;
            }
            &.chapeco{
                top: 524px;
                left: 364px;

                z-index: 3;
            }
            &.joinville{
                top: 522px;
                right: 246px;
            }
            &.itajai{
                top: 538px;
                right: 245px;
            }
        }
    }
`;