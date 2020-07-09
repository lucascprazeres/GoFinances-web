import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.theme.title === 'light' ? '#5636d3' : shade(0.2, '#5636d3')};
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        margin-right: 32px;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
