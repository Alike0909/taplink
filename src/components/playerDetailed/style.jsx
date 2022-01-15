import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    padding: 24px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
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

export const MusicItem = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;

    ${Block} {
        width: fit-content;
    }

    ${Block}:nth-child(2) {
        width: 100%;
        align-items: flex-start;
    }

    ${Block}:nth-child(3) {
        max-width: 64px;
    }
`

export const Music = styled.div`
    background: white;

    display: flex;
    flex-direction: column;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    background: ${Colors.very_peri};
`

export const LargeText = styled.span`
    margin-top: 24px;
    font-size: 20px;
`

export const Text = styled.span`
    font-size: 14px;
    text-align: left;

    opacity: ${props => props.blurred ? 0.6 : 1}
`

export const Quotes = styled.q`
    quotes: "“" "„" "‚" "‘";
`

export const MusicItemMask = styled.div`
    margin-top: 24px;
    width: 100%;
`

export const Counter = styled.span`
    padding: 6px 12px;   
    font-size: 18px;
    font-weight: bold;
`

export const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: transparent;
`;

export const Player = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 12px;
    padding: 12px 24px;
    width: calc(100% - 24px);
    height: 90px;
    max-height: 90px;
    background: ${Colors.sweet_lavender};
    border-radius: 24px;
    display: flex;
    justify-content: space - between;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    ${Block}:first-child {
        z-index: 1;
        overflow: hidden;
        width: fit-content;
        min-width: 38px;
        border-radius: 6px;
    }

    ${Block}:nth-child(2) {
        z-index: 1;
        margin-left: 12px;
        width: 100%;
        color: ${Colors.white};
        background: transparent;
        align-items: flex-start;
        justify-content: center;
    }

    ${Button} {
        z-index: 1;
        padding: 0;
        width: 36px;
        max-width: 36px;
        color: ${Colors.white};
    }
`

export const PlayerProgress = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: ${props => props.width};
    height: 100%;
    background: ${Colors.very_peri};
    transition: all 0.4s ease-in-out;
`

export const PlayerDuration = styled.div`
    opacity: 0.6;
    display: flex;
`