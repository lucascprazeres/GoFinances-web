import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { ThemeTogglerContext } from '../../App';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { title } = useContext(ThemeContext);
  const { themeToggler } = useContext(ThemeTogglerContext);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />

        <div>
          <nav>
            <Link to="/">Listagem</Link>
            <Link to="/import">Importar</Link>
          </nav>

          <Switch
            checked={title === 'dark'}
            onChange={themeToggler}
            height={16}
            width={40}
            handleDiameter={16}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#12a454"
          />
        </div>
      </header>
    </Container>
  );
};

export default Header;
