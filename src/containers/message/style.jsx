import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    overflow: scroll;
    padding: 48px 24px 108px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
`;

export const Block = styled.div`
    position: relative;
    margin-bottom: 12px;
    width: 100%;
    background: white;

    display: ${props => props.flex ? 'flex' : 'block'};
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
`;

export const TextArea = styled.textarea`
    outline: none;
    resize: none;
    margin-top: 12px;
    margin-bottom: 6px;
    padding: 12px;
    width: 100%;
    min-height: 152px;
    font-size: 16px;
    border-radius: 24px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Text = styled.span`
    font-size: 16px;

    display: flex;
    align-items: flex-end;
`

export const Input = styled.input`
    outline: none;
    margin-right: 12px;
    padding: 6px 12px;
    width: 100%;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Button = styled.button`
    outline: none;
    padding: 12px 24px;
    color: ${Colors.white};
    font-size: 16px;
    border: none;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    background: ${Colors.very_peri};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`