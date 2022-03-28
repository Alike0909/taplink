import styled from 'styled-components';
import * as Colors from '../../styles/colors';

export const Block = styled.div`
    background: white;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: ${props => props.spaceBetween ? 'space-between' : 'flex-start'};
    align-items: ${props => props.center ? 'center' : 'stretch'};

    ${props => props.container && `
        padding: 12px;
        border-radius: 12px;
        border: 1px solid rgb(102, 103, 171, 0.3);
    `}
`;

export const Wrapper = styled.div`
    padding: 48px 24px 108px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
`;

export const Input = styled.input`
    margin-top: 12px;
    outline: none;
    padding: 12px 24px;
    width: 100%;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &::placeholder {
        color: #636c72;
    }
`;

export const Button = styled.button`
    outline: none;
    margin-top: 12px;
    margin-bottom: 6px;
    padding: ${props => props.width ? `0` : '12px'} ${props => props.height ? `0` : '24px'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100%'};
    color: ${Colors.white};
    font-size: 16px;
    border: none;
    border-radius: ${props => props.round ? '50%' : '12px'};
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.transparent ? 'transparent' : Colors.very_peri};
    box-shadow: ${props => props.transparent ? 'none' : 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'};

    svg {
        fill: ${Colors.very_peri};
    }
`;

export const Text = styled.span`
    font-size: 20px;
    color: ${props => props.color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export const Empty = styled.div`
    margin-top: 12px;
    padding: 12px;
    background: white;
    border-radius: 12px;
    border: 1px solid rgb(102, 103, 171, 0.3);
    display: flex;
    align-items: center;

    &::after {
        content: "Empty";
        font-size: 20px;
        opacity: 0.6;
    }
`

export const Divider = styled.div`
    margin: 6px 0;
    width: 100%;
    height: 2px;
    background: ${Colors.very_peri};
    border-radius: 12px;
`