import styled from 'styled-components';
import * as Colors from '../../styles/colors';

export const Block = styled.div`
    margin-top: 12px;
    padding: 12px;
    background: white;
    border-radius: 12px;
    border: 1px solid rgb(102, 103, 171, 0.3);
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid ${props => props.checked ? Colors.very_peri : 'black'};
    background: ${props => props.checked ? Colors.very_peri : 'white'};

    svg {
        width: 24px;
        height: 24px;
        color: white;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.span`
    margin-left: 12px;
    font-size: 20px;
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`