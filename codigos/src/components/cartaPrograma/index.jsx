import { useEffect, useState } from "react"
import styled from "styled-components"
import { utils } from "../../utils"

const Container = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  p {
    font-weight: bold;
    color: #333;
    margin: 0;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`

const Info = styled.p`
  margin: 4px 0;
  color: #555;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Toggle = styled.p`
  margin: 8px 0;
  font-weight: bold;
  color: #464646;
  cursor: pointer;
  padding-right: 8px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: left;
    padding-right: 0;
    font-size: 13px;
  }
`

const LocalItem = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 8px;
  margin: 6px 0;
  font-size: 14px;
  color: #444;

  @media (max-width: 768px) {
    padding: 6px;
    margin: 4px 0;
    font-size: 13px;
  }

  p {
    margin: 2px 0;

    @media (max-width: 768px) {
      margin: 1px 0;
    }
  }
`

export const CardCartaPrograma = ({ data, viatura, numeroVt, placa, quadrante, tudo, onOpen, fullScreen }) => {
    const [mostrar, setMostrar] = useState(false)
    const [locais, setLocais] = useState([])

    useEffect(() => {
        const locaisExtraidos = tudo.map(item => ({
            inicio: utils.converterTimeExcel(item["Horário de início"]),
            fim: utils.converterTimeExcel(item["Horário de término"]),
            local: item["Local"],
            observacoes: item["Observações"] || "Nenhuma"
        }))
        setLocais(locaisExtraidos)
    }, [tudo]) // importante: atualizar quando mudar a placa

    const isSearchResult = onOpen && !fullScreen

    return (
        <Container style={fullScreen ? { minHeight: '80vh' } : {}}>
            <Header>
                <p>{quadrante}</p>
                <p>Data: {utils.converterDataExcel(data)}</p>
            </Header>
            <Info>Viatura: {numeroVt} - Placa: {placa.toUpperCase()}</Info>
            {isSearchResult ? (
                <Toggle onClick={onOpen}>
                    Visualizar
                </Toggle>
            ) : (
                <Toggle onClick={() => setMostrar(!mostrar)}>
                    {mostrar ? "Ocultar locais" : "Mostrar locais"}
                </Toggle>
            )}
            {mostrar && (
                locais.map((local, index) => (
                    <LocalItem key={index}>
                        <p>{local.inicio} às {local.fim}</p>
                        <p>{local.local}</p>
                        <p><strong>Observações:</strong> {local.observacoes}</p>
                    </LocalItem>
                ))
            )}
        </Container>
    )
}
