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
    position: relative; 
    margin-top: 24px;
    width: 100%;
    border-radius: 12px;
    display: flex;

    ${Block} {
        z-index: 1;
        width: fit-content;
    }

    ${Block}:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }

    ${Block}:nth-child(2) {
        width: 100%;
        align-items: flex-start;
    }

    ${Block}:nth-child(3) {
        max-width: 64px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`
export const Text = styled.span`
    font-size: 14px;
    text-align: left;

    opacity: ${props => props.blurred ? 0.6 : 1}
`

export const Counter = styled.span`
    padding: 6px 12px;   
    font-size: 18px;
    font-weight: bold;

    display: flex;
    align-items: center;    
    justify-content: center;
`

export const MusicProgress = styled.div`
    position: absolute;
    z-index: 0;
    top: -1px;
    left: -1px;
    width: ${props => props.width ? `calc(${props.width} + 2px)` : 0};
    height: 46px;
    border-radius: 12px;
    background: linear-gradient(to right, ${Colors.sweet_lavender}, ${Colors.very_peri}, ${Colors.orient_blue});
    transition: all 0.4s ease-in-out;
`