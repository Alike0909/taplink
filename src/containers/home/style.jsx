import styled from 'styled-components'
import { keyframes } from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    padding: 48px 24px 108px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
`;

export const Block = styled.div`
    width: 100%;
    background: white;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: center;    
`

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto;
    margin-bottom: 12px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: url('https://firebasestorage.googleapis.com/v0/b/numerology-d24f2.appspot.com/o/images%2FRfDVyzdWISXEHYcijXuoLY5OOet1?alt=media&token=undefined') no-repeat center /cover;
    display: flex;

    &:after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: 188px;
        height: 188px;
        border-radius: 50%;
        border: 2px solid ${Colors.very_peri};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
`;

export const Text = styled.span`
    font-size: 16px;

    img {
        width: 24px;
        height: 24px;
    }
`;

export const Link = styled.a`
    color: ${Colors.very_peri};
`

export const Divider = styled.div`
    margin: 24px 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Text} {
        padding: 0 6px;
        width: fit-content;
        color: ${Colors.very_peri};
        white-space: nowrap;
        text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    &::before {
        content: '';
        width: 80%;
        height: 4px;
        border-radius: 6px;
        background: ${Colors.very_peri};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    &::after {
        content: '';
        width: 20%;
        height: 4px;
        border-radius: 6px;
        background: ${Colors.very_peri};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`

export const Bio = styled.div`
    margin-top: 24px;
    width: 100%;

    display: flex;
    flex-direction: column;

    ${Block}:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${Text} {
            color: ${Colors.very_peri};
            display: flex;
            align-items: center;

            svg {
                margin-right: 2px;
            }
        }

        ${Text}:nth-child(2) {
            text-decoration: underline;
            font-size: 12px;
            cursor: pointer;
        }
    }

    ${Block} {
        align-items: flex-start;

        ${Text} {
            color: black;
            text-decoration: none;
            text-transform: capitalize;
        }
    }
`

export const Highlighted = styled.span`
    margin-left: 2px;
    color: ${Colors.very_peri};
    font-size: 12px;
    text-transform: none;
`

export const Contact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Text} {
        margin-bottom: 12px;
        color: ${Colors.very_peri};
        font-size: 14px;
    }
`

export const Img = styled.img`
    margin-right: 6px;
    width: 28px;
    height: 28px;
`