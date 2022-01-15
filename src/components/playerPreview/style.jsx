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
    font-size: 9px;
`;

export const Music = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Link} {
        overflow: hidden;
        margin-bottom: 4px;
        border-radius: 12px;
        border: 1px solid rgb(102, 103, 171, 0.3);
    }
`

export const MusicItem = styled.div`
    overflow: hidden;
    margin-top: 12px;
    margin-right: 12px;
    padding: 2px;
    width: calc(33.3333% - 12px);
    max-width: 100px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.img`
    width: 100%;
    min-width: 90px;
    max-height: 120px;
`

export const MusicItemMask = styled.div`
    margin-top: 12px;
    padding: 12px;
    width: calc(33.3333% - 6px);
    min-width: 100px;
    min-height: 100px;
    color: ${Colors.very_peri};
    border-radius: 12px;
    border: 1px dashed ${Colors.very_peri};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        margin-bottom: 6px;
    }
`