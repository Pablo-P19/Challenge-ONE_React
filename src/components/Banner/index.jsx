import { useAPI } from 'context/Api';
import styled from '@emotion/styled';
import Button from '../Button';
import './Banner.css'
import ReactPlayer from 'react-player';


const BannerContainer = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  height: 70vh;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    height: 100%;
    gap: 4rem;
    padding-top: 5rem;
  }
`;

//Boton para ver video (modo responsivo)
const Boton = styled.a`
    text-align: center;
    padding: 1rem 2rem;
    display: inline-block;
    line-height: 1;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 600;
    font-size: 2rem;
    ${({ tipo, color }) => {
    switch (tipo) {
      case 'lineas':
        return `display: inline-block; border: 1px solid ${color}; color: ${color};`
      default:
        return `display: inline-block; background-color: ${color}; color: var(--color-btn);`
    }
  }
  };
`;

const AnuncioBoton = styled(Boton)`
    text-decoration: none;
    border: 2px solid aqua;
    @media screen and (min-width: 950px) {
        display: none;
    }
`;

const Banner = () => {
  const { banner } = useAPI()

  return (
    <BannerContainer img={banner.img} >
      <Overlay className='container'>
        <div className='bannerInfo'>
          <Button texto={banner.categoria} tipo='bannerBtn' />
          <h1>{banner.titulo}</h1>
          <p>{banner.descripcion}</p>
        </div>
        <AnuncioBoton tipo='completo' color='var(--color-btnBack)' target="_blank" href={banner.url} >Ver Video</AnuncioBoton>
        <div className='player'>
          <ReactPlayer url={banner.url} controls />
        </div>
      </Overlay>
    </BannerContainer>
  )
};

export default Banner;