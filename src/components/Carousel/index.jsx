import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import { useAPI } from "context/Api";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const VideosContainer = styled.div`
  img {
    width:100%;
    transition: filter 200ms ease-in-out;
    cursor:pointer;
  }

  img:hover {
    filter: brightness(165%);
  }
`

export default function Carousel({ videos, clr }) {
  const { mostrarVideo } = useAPI();
  const items = videos.map((video) => (
    <VideosContainer key={video.id}>
      <img
        key={video.id}
        id={video.id}
        src={video.img}
        alt={video.titulo}
        role="presentation"
        style={{ border: `solid 3px ${clr}` }}
        onClick={(e) => {
          mostrarVideo(e.target.id, clr)
        }}
      />
    </VideosContainer>
  ))

  return (
    <div>
      <Slider {...settings}>
        {items}
      </Slider>
    </div>
  );
}
