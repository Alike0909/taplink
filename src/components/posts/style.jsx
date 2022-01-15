import styled from 'styled-components'

export const Post = styled.div`
    margin-bottom: 12px;
    padding: 12px;
    border: none;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    display: flex;
    flex-direction: column;
`

export const PostItem = styled.div`
    margin: 6px 0;
    display: flex;
    flex-direction: ${props => props.flex ? 'row' : 'column'};

    img {
        margin-right: 6px;
        width: 20px;
        height: 20px;
    }
`

export const Status = styled.span`
    margin-bottom: 1px;
    font-size: 12px;
    color: ${props => props.checked ? 'green' : 'red'};

    display: inline-flex;
    align-items: center;
`

export const Text = styled.span`
    font-size: 16px;

    display: flex;
    align-items: flex-end;
`

export const SmallText = styled.span`
    margin-bottom: 1px;
    font-size: 12px;
    opacity: 0.6;
`