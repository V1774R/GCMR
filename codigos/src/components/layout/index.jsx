import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Cabecalho } from "../cabecalho"
import { Home } from "../home"
import { Rodape } from "../rodape"
import { GlobalStyle } from "../estilosGlobais"

const Main = styled.main`
    min-height: calc(100vh - 120px); /* Ajustar baseado no header e footer */
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
        min-height: calc(100vh - 100px);
    }
`

export const Layout = () => {
    return(
        <>
            <GlobalStyle />
            <Cabecalho />
            <Main>
                <Outlet />
            </Main>
            <Rodape />
        </>
    )
}