import styled from 'styled-components';
import * as Colors from '../../styles/colors';

export const Block = styled.div`
    background: white;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
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
`;

export const Button = styled.button`
    outline: none;
    margin-top: 12px;
    margin-bottom: 6px;
    padding: 12px 24px;
    width: 100%;
    color: ${Colors.white};
    font-size: 16px;
    border: none;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    background: ${Colors.very_peri};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Text = styled.span`
    font-size: 20px;
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