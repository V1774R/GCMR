import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"


const HeaderEstilizado = styled.header`
    background: var(--azul-escuro);
    color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 12px;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .logo img {
        width: 42px;

        @media (max-width: 768px) {
            width: 32px;
        }
    }

    .logo-text {
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    .menu-icon {
        font-size: 22px;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`

const MenuList = styled.ul`
    position: absolute;
    top: 100%;
    right: 16px;
    background: var(--azul-escuro);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 12px;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 180px;
    z-index: 10;

    @media (max-width: 768px) {
        top: 100%;
        right: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 100px);
        border-radius: 0;
        padding: 20px;
        justify-content: center;
        align-items: center;
    }
`

const MenuItem = styled.li`
    display: block;
`

const MenuLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: opacity .2s ease;
    font-size: 16px;

    &.active {
        opacity: 0.7;
    }

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 10px 0;
    }
`

export const Cabecalho = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <HeaderEstilizado>
            <div className="logo">
                <img src="imgs/brasao.png" alt="Brasão" />
                <div className="logo-text">
                    GUARDA CIVIL <br /> MUNICIPAL DO RECIFE
                </div>
            </div>
            <div>
                <div className="menu-icon" onClick={() => setMenuOpen(prev => !prev)}>
                    ☰
                </div>
                {menuOpen && (
                    <MenuList>
                        <MenuItem>
                            <MenuLink to="/" onClick={() => setMenuOpen(false)}>
                                Início
                            </MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink to="/pesquisa" onClick={() => setMenuOpen(false)}>
                                Consulta
                            </MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink to="/inspetoria/relatorios" onClick={() => setMenuOpen(false)}>
                                Carta programa
                            </MenuLink>
                        </MenuItem>
                    </MenuList>
                )}
            </div>
        </HeaderEstilizado>
    )
}