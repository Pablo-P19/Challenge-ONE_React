import styled from "styled-components";
import imgErrorMessag from "../../assets/img/page_not_found.png";


const Main = styled.main`
  display: flex;
  margin-top: 94px;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
`;

const ImgErrorMessag = styled.img`
  max-width: 100%;
`;

const PageNotFound = () => {
  return (
    <Main>
      <ImgErrorMessag src={imgErrorMessag} alt="Page not found" />
    </Main>
  );
};

export default PageNotFound;