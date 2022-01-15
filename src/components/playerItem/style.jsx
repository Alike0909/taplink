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
export const Text = styled.span`
    font-size: 14px;
    text-align: left;

    opacity: ${props => props.blurred ? 0.6 : 1}
`

export const Counter = styled.span`
    padding: 6px 12px;   
    font-size: 18px;
    font-weight: bold;
`