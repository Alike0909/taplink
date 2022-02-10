import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Text = styled.span`
    position: absolute;
    top: 178px;
    right: 15px;
    font-size: 16px;
    color: ${props => props.error ? Colors.red : "black"};
`

export const Warning = styled.span`
    margin-left: 4px;
    margin-bottom: 6px;
    font-size: 16px;
    color: red;
`