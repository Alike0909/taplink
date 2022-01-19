import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    margin-top: 12px;
    padding: 12px;
    font-family: 'Montserrat', sans-serif !important;
    background: white;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Block = styled.div`
    width: 100%;
    background: white;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: space-between;
    align-items: center;    
`

export const Link = styled.a`
    color: ${Colors.very_peri};

    display: flex;
    align-items: center;

    svg {
        margin-left: 6px;
    }
`

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 20px;
`;

export const Text = styled.span`
    text-align: left;
    width: fit-content;
    font-size: 14px;
`;

export const Portfolio = styled.div`
    display: flex;
    flex-direction: column;
`

export const PortfolioItem = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 4px 12px;
    color: ${Colors.very_peri};
    border-radius: 6px;
    border: 1px solid rgb(102, 103, 171, 0.3);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        margin-right: 6px;
    }
`