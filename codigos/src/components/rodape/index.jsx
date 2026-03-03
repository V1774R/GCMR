import styled from "styled-components"

const FooterEstilizado = styled.footer`
    background: var(--azul-escuro);
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 13px;
`

export const Rodape = () => {
    return (
        <FooterEstilizado>
            © 2026 Guarda Civil Municipal do Recife • Todos os direitos reservados
        </FooterEstilizado>
    )
}