import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <Container />
      </Main>
    </>
  );
}
