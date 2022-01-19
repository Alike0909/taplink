import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    padding: 24px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;

    @media screen and (min-width: 320px) {
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        margin: 0 auto;
        max-width: 775px;
    }
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

export const PortfolioHeading = styled.h1`
    margin: 0;
    color: ${Colors.very_peri};
    font-weight: bold;
    font-size: 14px;
`;

export const PortfolioTitle = styled.span`
    font-weight: bold;
    font-size: 16px;

    &:first-letter {
        text-transform: capitalize;
    }
`

export const Text = styled.span`
    margin: 12px 0;
    font-size: 14px;
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

export const Portfolio = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    ${Block} {
        align-items: flex-start;
    }

    ${Link} {
        width: 100%;
        max-width: 100%;

        svg {
            margin: 0;
        }
    }
`

export const PortfolioItem = styled.div`
    overflow: hidden;
    margin-top: 12px;
    width: 100%;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    ${Block}:nth-child(2) {
        padding: 24px;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const Features = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    ${Text} {
        margin: 0;
        margin-right: 12px;
        margin-bottom: 6px;
        opacity: 0.6;
    }
`