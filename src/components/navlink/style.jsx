import styled from 'styled-components'
import * as Colors from '../../styles/colors'

export const MenuItem = styled.div`
  padding: 8px 12px;
  border-radius: 24px;
  background: ${props => props.active ? Colors.white : "transparent"};
  box-shadow: ${props => props.active ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" : "none"};
  transition: all 0.3s ease-out;

  svg {
    margin-top: 3px;
    margin-right: 6px;
    path {
      ${props => props.active ?
        `
            fill: ${Colors.orient_blue};
            opacity: 1;
          `
        :
        `
            fill: ${Colors.white};
            opacity: 0.6;
          `
    };
    }
  }

  a {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 6px;
    display: ${props => props.active ? 'block' : 'none'};
  }

  @media screen and (min-width: 320px) {
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 24px 0;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      transition: all 0.3s ease-out;

      span {
        display: block;
        color: ${props => props.active ? Colors.orient_blue : 'white'};
        opacity: ${props => props.active ? '1' : '0.6'};
        transition: all 0.3s ease-out;
      }
    }
  }
    
`;