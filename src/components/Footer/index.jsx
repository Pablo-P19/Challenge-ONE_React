/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';
import logo from 'assets/img/logo.png'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


const Footer = styled.section`
  width: 100%;
  text-align: center;
  border-top: solid 1.5px var(--color-primary);
  margin-top: 5rem;
`

const Img = styled.img`
  width: 16rem;
  padding: .5rem 0 0 0;
`

export default () => {
  return (
    <Footer>
      <Link to={'/'}>
        <Img src={logo} alt='logo Aluraflix' />
      </Link>
      <Typography style={{ padding: '.5rem 0 3rem 0' }}>© Desarrollado por Pablo Pérez | 2023 </Typography>
    </Footer>
  )
}
