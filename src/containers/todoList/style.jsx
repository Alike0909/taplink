import styled from 'styled-components';
import * as Colors from '../../styles/colors';

export const Block = styled.div`
    ${props => props.fixed && `
        position: sticky;
        z-index: 2;
        top: 0;
        padding: 6px 0;
    `}
    background: white;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: ${props => props.spaceBetween ? 'space-between' : 'flex-start'};
    align-items: ${props => props.center ? 'center' : 'stretch'};
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

export const SmallInput = styled.input`
    margin: 12px 6px 0 0;
    outline: none;
    padding: 10px 20px;
    width: calc(100% - 100px);
    font-size: 14px;
    border-radius: 12px;
    border: none;
    border: 1px solid rgb(102, 103, 171, 0.3);

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

export const SmallButton = styled.button`
    outline: none;
    margin-top: 12px;
    padding: 12px 20px;
    color: ${Colors.white};
    font-size: 14px;
    border: none;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    background: ${Colors.very_peri};

    svg {
        fill: ${Colors.very_peri};
    }
`;

export const Text = styled.span`
    font-size: 20px;
`

export const SmallText = styled.span`
    font-size: 16px;
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

export const TextArea = styled.textarea`
    margin-top: 12px;
    padding: 12px;
    outline: none;
    min-height: 300px;
    font-size: 16px;
    resize: none;
    border-radius: 12px;
    border: 1px solid rgb(102, 103, 171, 0.3);
`