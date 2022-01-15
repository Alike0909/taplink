import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    padding: 24px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
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

export const GalleryItem = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;

    ${Block}:last-child {
        padding: 12px;
        padding-right: 0;
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

export const Gallery = styled.div`
    background: white;

    display: flex;
    flex-direction: column;

    div:first-child {
        flex: 1;
    }

    div:last-child {
        flex: 1.5;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const GalleryTitle = styled.span`
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: ${props => props.bold ? 'bold' : 'regular'}
`

export const Text = styled.span`
    margin-bottom: 12px;
    font-size: 12px;
`

export const SmallText = styled.span`
    font-size: 7px;
    opacity: 0.6;
    align-self: flex-end;
`

export const Quotes = styled.q`
    quotes: "“" "„" "‚" "‘";
`

export const GalleryItemMask = styled.div`
    margin-top: 24px;
    width: 100%;
    min-height: 154px;
    color: ${Colors.very_peri};
    border: 1px dashed ${Colors.very_peri};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        margin-bottom: 6px;
    }
`