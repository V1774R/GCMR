import { useEffect, useState } from "react"
import styled from "styled-components"
import * as XLSX from "xlsx"
import { CardCartaPrograma } from "../../../components/cartaPrograma"


const Container = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px) {
        padding: 12px;
        gap: 12px;
    }

    h1 {
        font-size: 24px;
        margin-top: 24px;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    input {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;

        @media (max-width: 768px) {
            padding: 10px 12px;
        }
    }
    .aviso{
        font-size: 14px;
        color: #832122;
        font-style: italic;
    }
    button {
        background: #09345f;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 14px;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;

        @media (max-width: 768px) {
            padding: 12px 16px;
        }
    }

    p {
        font-size: 14px;

        @media (max-width: 768px) {
            font-size: 13px;
        }
    }
`

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 9999;
`

const Modal = styled.div`
    width: min(1200px, 100%);
    max-height: calc(100vh - 32px);
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
    overflow: auto;
    padding: 24px;

    @media (max-width: 768px) {
        padding: 16px;
        max-height: calc(100vh - 16px);
        border-radius: 8px;
    }
`

const CloseButton = styled.button`
    background: #832122;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 16px;
    font-size: 16px;

    &:hover {
        opacity: 0.92;
    }

    @media (max-width: 768px) {
        padding: 12px 16px;
        font-size: 14px;
    }
`

export const Relatorios = () => {
    const [ocorrencias, setOcorrencias] = useState([])
    const [pbf, setPbf] = useState([])
    const [cartaProgramaData, setCartaProgramaData] = useState([])
    const [cartaProgramaFiltrada, setCartaProgramaFiltrada] = useState([])
    const [selectedCarta, setSelectedCarta] = useState(null)
    const [placa, setPlaca] = useState("")

    const urlOcorrencias = "https://docs.google.com/spreadsheets/d/1TdR5mHLyTQqu4WEyIh7_cT8Nuaq_ZDBYFFTMTC1X-1o/export?format=xlsx"
    const urlPbf = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXsPc89dcJrMG56rb30eBxB-eFMK_952DkshZlnkwDQrnCpre-qe5qw8rHGtLKMT6RwRYcdY2kPr9r/pub?output=xlsx"
    const urlCartaPrograma = "https://docs.google.com/spreadsheets/d/11hdf6deFTmbzvMlbTk4GYs6rFH3Q9rLe3Rdiu8SMRAs/export?format=xlsx"

    useEffect(() => {
        fetch(urlCartaPrograma)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "array" })
                const sheet = workbook.Sheets["Dados"]

                if (sheet) {
                    const json = XLSX.utils.sheet_to_json(sheet)
                    setCartaProgramaData(json)
                    console.log(json)
                } else {
                    console.error("Aba 'Dados' não encontrada na planilha.")
                }
            })
    }, [])

    const buscarCartaPrograma = (placa) => {
        fetch(urlCartaPrograma)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "array" })
                const sheet = workbook.Sheets["Dados"]

                if (sheet) {
                    const json = XLSX.utils.sheet_to_json(sheet)

                    // filtra pela placa
                    const filtrados = json.filter(
                        item => item["Placa"].toLowerCase() === placa.toLowerCase()
                    )

                    // agrupa por data
                    const grupos = filtrados.reduce((acc, item) => {
                        const data = item["Data do serviço"]
                        if (!acc[data]) acc[data] = []
                        acc[data].push(item)
                        return acc
                    }, {})

                    const agrupados = Object.entries(grupos).map(([data, itens]) => ({
                        data,
                        itens
                    }))

                    setCartaProgramaFiltrada(agrupados)
                } else {
                    console.error("Aba 'Dados' não encontrada na planilha.")
                }
            })
    }

    return (
        <Container>
            
            <p className="aviso"><strong>Aviso:</strong> Esta funcionalidade é uma solução provisória e pode apresentar inconsistências, já que depende de planilhas online que podem ser alteradas sem aviso prévio.
            <br /> Em caso de divergências, entre em contato com o(a) agente responsável pelo serviço administrativo do seu setor.</p>
            <p>A equipe de tecnologia já está trabalhando no desenvolvimento de uma solução definitiva, mais estável e confiável.</p>

            <h1>Carta Programa Online</h1>
            <input type="text" placeholder="Insira uma placa para consultar" onChange={(e) => { setPlaca(e.target.value) }} />
            
            <button onClick={() => { buscarCartaPrograma(placa) }}>Consultar</button>
            <hr />
            {
                cartaProgramaFiltrada.map(grupo => (
                    <CardCartaPrograma
                        key={grupo.data}
                        data={grupo.data}
                        viatura={grupo.itens[0]["Viatura"]}
                        numeroVt={grupo.itens[0]["Numero"]}
                        placa={grupo.itens[0]["Placa"]}
                        quadrante={grupo.itens[0]["Quadrante"]}
                        tudo={grupo.itens}
                        onOpen={() => setSelectedCarta(grupo)}
                    />
                ))
            }
            {
                selectedCarta && (
                    <Overlay>
                        <Modal>
                            <CloseButton onClick={() => setSelectedCarta(null)}>
                                Fechar
                            </CloseButton>
                            <CardCartaPrograma
                                data={selectedCarta.data}
                                viatura={selectedCarta.itens[0]["Viatura"]}
                                numeroVt={selectedCarta.itens[0]["Numero"]}
                                placa={selectedCarta.itens[0]["Placa"]}
                                quadrante={selectedCarta.itens[0]["Quadrante"]}
                                tudo={selectedCarta.itens}
                                fullScreen
                            />
                        </Modal>
                    </Overlay>
                )
            }
        </Container>
    )
}