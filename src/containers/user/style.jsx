import styled from 'styled-components'
import * as Colors from '../../styles/colors'
import { keyframes } from "styled-components";

export const Block = styled.div`
    background: white;
`;

export const Wrapper = styled.div`
    padding: 48px 24px 108px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;

    ${Block}:nth-child(2) {
        margin: 24px 0;
        max-width: 300px;
        text-align: right;
    }
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
`

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
`

export const Text = styled.span`
    font-size: 20px;
`

export const Highlighted = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.very_peri};
`

export const Warning = styled.span`
    margin-left: 4px;
    font-size: 16px;
    color: red;
`

export const Links = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

export const LinkItem = styled.div`
    overflow: hidden;
    margin-top: 12px;
    padding: 12px;
    width: 100%;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    display: flex;

    ${Text} {
        overflow: hidden;
        margin-left: 6px;
        font-size: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    ${Button} {
        color: ${Colors.orient_blue};
        background: rgb(102, 103, 171, 0.3);
    }

    ${Block} {
        margin: 6px 0 0 !important;
        max-width: 100% !important;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${Text}:first-child {
            color: ${Colors.very_peri};
        }
    }

    ${Block}:nth-child(3) {
        padding: 0 6px;
        display: ${props => (props.active ? 'flex' : 'none')};

        ${Text} {
            margin: 0;
            color: black;

            display: flex;
            align-items: center;

            svg {
                margin-right: 2px;
            }
        }
    }

    @media screen and (min-width: 320px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        align-items: center;

        ${Text}:first-child {
            width: 100%;
        }

        ${Text}:nth-child(2) {
            margin-top: 0;
        }

        ${Button} {
            margin: 0;
            margin-left: 24px;
            max-width: 109px;
        }
    }
`

const activeOption = keyframes`
    100%  {
        transform: rotateZ(90deg);
        opacity: 1;
    }
`

const disabledOption = keyframes`
    0% {
        transform: rotateZ(90deg);
        opacity: 1;
    }

    100%  {
        transform: rotateZ(0deg);
        opacity: 0.6;
    }
`

export const ButtonOption = styled.button`
    outline: none;
    margin: 2px;
    padding: 5px 0 0 !important;
    color: ${Colors.very_peri};
    opacity: 0.6;
    border: none;
    background: transparent;

    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-name: ${props => (props.active ? activeOption : disabledOption)};
    animation-fill-mode: forwards;

    @media screen and (min-width: 320px) {
        display: block;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`