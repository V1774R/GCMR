import styled from "styled-components"


const HeaderEstilizado = styled.header`
    background: var(--azul-escuro);
    color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .logo img {
        width: 42px;
    }

    .logo-text {
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;
    }

    .menu-icon {
        font-size: 22px;
        cursor: pointer;
    }
`

export const Cabecalho = () => {

    return (
        <HeaderEstilizado>
            <div className="logo">
                <img src="imgs/brasao.png" alt="Brasão" />
                <div className="logo-text">
                    GUARDA CIVIL <br /> MUNICIPAL DO RECIFE
                </div>
            </div>
            <div class="menu-icon">☰</div>
        </HeaderEstilizado>
    )
}