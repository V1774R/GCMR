import styled from "styled-components"
import { FaLaptopCode, FaShieldAlt, FaScroll, FaUsers, FaNewspaper, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const ContainerPesquisaEstilizado = styled.div`
    position: relative;
    padding: 16px;
    background: white;

    @media (max-width: 768px) {
        padding: 12px;
    }

    input {
        width: 100%;
        padding: 12px 40px 12px 16px; /* espaço extra à direita */
        border-radius: 10px;
        border: 1px solid #ddd;
        font-size: 14px;
        outline: none;
        transition: 0.3s;

        @media (max-width: 768px) {
            font-size: 16px; /* melhor para mobile */
        }
    }

    input:focus {
        border-color: var(--azul-medio);
        box-shadow: 0 0 0 2px rgba(21, 74, 125, 0.15);
    }

    .search-icon {
        position: absolute;
        right: 24px; /* posição dentro do input */
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: var(--azul-medio);
        pointer-events: none; /* não atrapalha o clique no input */

        @media (max-width: 768px) {
            right: 20px;
        }
    }
`

const BannerEstilizado = styled.div`
    background-color: var(--azul-escuro);
    color: var(--azul-claro);
    padding: 40px 20px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-bottom: 8px;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    p {
        font-size: 14px;
        opacity: 0.9;

        @media (max-width: 768px) {
            font-size: 13px;
        }
    }
`

const SecaoEstilizada = styled.section`
    padding: 20px 16px;

    @media (max-width: 768px) {
        padding: 15px 12px;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        margin-bottom: 16px;
        color: var(--azul-escuro);

        @media (max-width: 768px) {
            font-size: 15px;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 769px) {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }

    .card {
        background: white;
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        transition: 0.3s;
        cursor: pointer;

        @media (max-width: 768px) {
            padding: 16px;
        }
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
        font-size: 28px;
        margin-bottom: 12px;
        color: var(--azul-medio);

        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    .card h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        margin-bottom: 6px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    .card p {
        font-size: 13px;
        opacity: 0.8;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
`

export const Home = () => {
    return (
        <>
            <ContainerPesquisaEstilizado>
                <input type="text" placeholder="Pesquisar serviços, notícias ou unidades..." />
                <FaSearch className="search-icon" />
            </ContainerPesquisaEstilizado>


            <BannerEstilizado>
                <h1>Protegendo o Recife com compromisso e tecnologia</h1>
                <p>Segurança, cidadania e atuação estratégica</p>
            </BannerEstilizado>

            <SecaoEstilizada>
                <h2>Serviços e Unidades</h2>
                <div className="cards">
                    <div className="card">
                        <div className="card-icon"><FaLaptopCode /></div>
                        <h3>Unidade de Tecnologia</h3>
                        <p>Sistemas, monitoramento e suporte operacional.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><FaShieldAlt /></div>
                        <h3>Grupamento Tático Operacional</h3>
                        <p>Atuação especializada e resposta rápida.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><FaScroll /></div>
                        <h3>Legislação</h3>
                        <p>Leis, decretos e normas institucionais.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><FaUsers /></div>
                        <h3>Quem Somos</h3>
                        <p>História, missão e valores da corporação.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><FaNewspaper /></div>
                        <h3>Notícias e Ações</h3>
                        <p>Fique por dentro das ações recentes.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><FaMapMarkerAlt /></div>
                        <h3>Onde Estamos</h3>
                        <p>Endereços e contatos das unidades.</p>
                    </div>
                </div>

            </SecaoEstilizada>
        </>
    )
}