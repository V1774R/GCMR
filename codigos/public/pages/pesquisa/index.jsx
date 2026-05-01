import styled from 'styled-components'
import { ExibidorDados } from '../../../src/components/exibidorDados'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 16px;

    @media (max-width: 768px) {
        padding: 15px;
        gap: 12px;
    }

    h1 {
        font-size: 24px;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 16px;
        text-align: center;
        max-width: 600px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`

export const Pesquisa = () => {
    return (
        <Container>
            <h1>Análise de Diagnóstico</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae veniam atque architecto sunt, quia nulla odio nihil doloremque, molestiae, adipisci culpa expedita magni provident vero voluptatem aspernatur incidunt dolores!</p>

            <ExibidorDados dados="Exemplo de dados para exibir" />
        </Container>
    )
}