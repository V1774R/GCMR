import styled from 'styled-components'
import { ExibidorDados } from '../../../src/components/exibidorDados'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 16px;
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