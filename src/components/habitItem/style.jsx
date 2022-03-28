import styled from 'styled-components';
import * as Colors from '../../styles/colors';

export const Block = styled.div`
    margin-top: 12px;
    padding: 12px;
    width: 100%;
    max-width: 300px;
    border: none;
    border-radius: 24px;
    background: ${props => props.color};
`;

export const Checkbox = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid ${props => props.checked ? Colors.very_peri : 'black'};
    background: ${props => props.checked ? Colors.very_peri : 'white'};

    svg {
        width: 24px;
        height: 24px;
        color: white;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    margin: 0;
    margin-top: 12px;
    color: white;
    font-weight: bold;
    font-size: 20px;
`;

export const Text = styled.span`
    width: 100%;
    color: white;
    opacity: 0.6;
    font-size: 18px;
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`

export const Button = styled.button`
    margin-left: 6px;
    padding: 0;
    outline: none;
    border: none;
    background: transparent;

    svg {
        width: 24px;
        height: 24px;
        color: ${props => props.color || 'black'};
    }

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Progress = styled.div`
    margin: 12px 0;
    width: 100px;
    height: 4px;
    border-radius: 12px;
    background: black;
`

export const Bar = styled.div`
    width: ${props => props.width + '%'};
    height: 100%;
    background: white;
    border-radius: 12px;
`