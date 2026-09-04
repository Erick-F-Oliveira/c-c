import { Outlet } from "react-router-dom";
import Container from "../../components/Container.jsx";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const Base = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </>
  );
};
export default Base;
