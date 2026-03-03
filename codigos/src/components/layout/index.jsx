import { Outlet } from "react-router-dom"
import { Cabecalho } from "../cabecalho"
import { Home } from "../home"
import { Rodape } from "../rodape"
import { GlobalStyle } from "../estilosGlobais"

export const Layout = () => {
    return(
        <>
            <GlobalStyle />
            <Cabecalho />
                <main>
                    <Outlet />
                </main>
            <Rodape />
        </>
    )
}