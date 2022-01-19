import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    padding: 24px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;

    @media screen and (min-width: 320px) {
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        margin: 0 auto;
        max-width: 775px;
    }
`;

export const Block = styled.div`
    width: 100%;
    background: white;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: center;    
    justify-content: space-between;
`

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 20px;
`;

export const Text = styled.span`
    font-size: 16px;
`

export const Link = styled.a`
    color: ${Colors.very_peri};
    width: 56px;
    max-width: 56px;

    display: flex;
    align-items: center;

    svg {
        margin-right: 6px;
    }
`

export const Button = styled.button`
    outline: none;
    width: 56px;
    max-width: 56px;
    border: none;
    color: ${Colors.very_peri};
    background: transparent;

    display: flex;
    align-items: center;    
    justify-content: flex-end;
`

export const Timeline = styled.div`
    position: relative;
    width: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &::before {
        content: '';
        overflow: hidden;
        z-index: 1;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${Colors.very_peri};
        background: ${props => props.filled ? Colors.very_peri : 'white'};
    }

    span {
        position: absolute;
        z-index: 1;
        top: -1px;
        left: -1px;
        width: 18px;
        height: 18px;
    }
`

export const TimelineBar = styled.div`
    position: absolute;
    top: ${({ timelineSettings }) => timelineSettings.startHeight / 2}px;
    left: 4px;
    width: 8px;
    height: 100%;
    background: rgb(102, 103, 171, 0.3);
`

export const JobsItem = styled.div`
    width: 100%;

    ${Block}:first-child {
        position: relative;
        z-index: 1;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

        ${Block} {
            overflow: hidden;
            z-index: 1;
        }
        
        ${Text} {
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            padding: 4px;
            color: white;
            border-top-right-radius: 12px;
            border-bottom-left-radius: 12px;
            background: rgb(102, 103, 171, 0.6);
        }

        ${Title}:last-child {
            position: absolute;
            z-index: 1;
            bottom: -12px;
            left: 0;
            right: 0;
            margin: 0 auto;
            padding: 4px 6px;
            width: fit-content;
            color: white;
            font-size: 16px;
            border-radius: 12px;
            border: 4px solid white;
            background: ${Colors.very_peri};
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
    }

    ${Block}:last-child { 
        position: relative;
        z-index: 0;
        top: -12px;
        padding: 12px;
        padding-top: 24px;
        min-height: 60px;
        border-radius: 12px;
        border: 1px solid rgb(102, 103, 171, 0.3);
        align-items: flex-start;

        ${Text}:first-letter {
            text-transform: capitalize;
        }

        ${Link} {
            width: 100%;
            max-width: 100%;

            svg {
                margin: 0;
            }
        }
    }
`

export const Jobs = styled.div`
    position: relative;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`

export const Img = styled.img`
    width: 100%;
`

export const JobsItemMask = styled.div`
    margin-bottom: 12px;
    width: 100%;

    ${Block} {
        padding: 12px;
        border-radius: 12px;
        border: 1px dashed rgb(102, 103, 171, 0.6);
        align-items: flex-start;

        ${Text}:first-child {
            color: ${Colors.very_peri};
            display: flex;
            align-items: center;

            svg {
                margin-right: 6px;
            }
        }
    }
`