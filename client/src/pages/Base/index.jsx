import { Outlet } from "react-router";
import Container from "../../components/Container.jsx";
import Header from "../../components/Header.jsx"


function Base() {
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