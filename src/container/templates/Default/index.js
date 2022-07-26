import { Header, Footer } from 'components';

function Default({ children }) {
  return (
    <>
      <Header />
      <div className='main-site'>{children}</div>
      <Footer />
    </>
  );
}

export default Default;
