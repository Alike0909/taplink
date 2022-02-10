import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Wrapper = styled.div`
    position: relative;
    padding: 48px 24px;
    background: white;
    font-family: 'Montserrat', sans-serif !important;
`;

export const Block = styled.div`
    position: relative;
    z-index: 1;
    background: white;
`;

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
`;

export const Img = styled.img`
    width: 40%;
`
export const Divider = styled.div`
    position: absolute;
    margin: 12px 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
        content: '';
        z-index: -1;
        width: 100%;
        height: 4px;
        border-radius: 6px;
        background: ${Colors.very_peri};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`

export const Tabs = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
`

export const Tab = styled.div`
    width: fit-content;
    margin-left: 24px;
    padding: 8px 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px -1px 6px, rgba(0, 0, 0, 0.23) 0px -1px 6px;
    &::after {
        content: "${props => props.content}";
        font-size: 18px;
    }
`

export const Posts = styled.div`
    position: relative;
    top: 0;
    z-index: 2;
    background: white;
`

export const Post = styled.div`
    padding: 24px 0;
    width: 100%;
    border-bottom: 1px solid rgb(102, 103, 171, 0.3);
    display: flex;
    justify-content: space-between;
`

export const PostDetails = styled.div`
    padding-right: 12px;
    width: 60%;
    display: flex;
    flex-direction: column;
`

export const PostTitle = styled.span`
    margin: 0;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
`

export const PostSubTitle = styled.span`
    overflow: hidden;
    margin-top: 6px;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
`