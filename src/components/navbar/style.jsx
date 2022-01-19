import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const Menu = styled.div`
  margin-bottom: 12px;
  background: ${Colors.very_peri};
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (min-width: 320px) {
    margin: 0 auto;
    margin-bottom: 12px;
    padding: 20px 24px;
    width: calc(100% - 24px);
    height: fit-content;
    border-radius: 24px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: 300px 48px;
    min-width: 300px;
    height: 100%;
    border-radius: 0px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Label = styled.span`
  color: ${Colors.orient_blue};
  font-size: 14px;
`