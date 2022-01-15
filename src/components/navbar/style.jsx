import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Menu = styled.div`
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 20px 24px;
  width: calc(100% - 24px);
  background: ${Colors.very_peri};
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Label = styled.span`
  color: ${Colors.orient_blue};
  font-size: 14px;
`