import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { validaCampos } from 'models/Registrar';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';
import Footer from './components/Footer';
import Header from 'components/Header';
import ValidateForm from 'context/ValidateForm';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { ApiProvider } from 'context/Api';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <ApiProvider>
          <ValidateForm.Provider value={{
            titulo: validaCampos,
            url: validaCampos,
            img: validaCampos,
            categSelec: validaCampos,
            codigo: validaCampos,
            nombre: validaCampos,
            clr: validaCampos,
          }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path='newVideo' element={<NewVideo validaciones={{ titulo: validaCampos }} />} />
              <Route path='newCategory' element={<NewCategory />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </ValidateForm.Provider>
      </ApiProvider>
      <Footer />
    </BrowserRouter>
  );
}