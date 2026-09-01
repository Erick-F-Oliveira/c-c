import { Outlet } from "react-router-dom";
import Container from "../../components/Container.jsx";
import Header from "../../components/Header.jsx";

const  Base = () =>{
  return (
    <>
      <main>
        <Container>
          <Header />
          <Outlet />
        </Container>
      </main>
    </>
  );
}
export default Base;
