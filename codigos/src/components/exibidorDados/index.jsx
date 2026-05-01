import { useEffect, useState, useRef } from "react"
import * as XLSX from "xlsx"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 32px;
    justify-content: center;
`

const Medias = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding-left: 72px;
    width: 100%;

    p {
        font-weight: bold;
    }
`

export const ExibidorDados = () => {
    const url = "https://docs.google.com/spreadsheets/d/1TdR5mHLyTQqu4WEyIh7_cT8Nuaq_ZDBYFFTMTC1X-1o/export?format=xlsx"
    const url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXsPc89dcJrMG56rb30eBxB-eFMK_952DkshZlnkwDQrnCpre-qe5qw8rHGtLKMT6RwRYcdY2kPr9r/pub?output=xlsx"

    const [dados1, setDados1] = useState([])
    const [mediaGeral1, setMediaGeral1] = useState(0)
    const [dados2, setDados2] = useState([])
    const [mediaGeral2, setMediaGeral2] = useState(0)

    const [itemSelecionado, setItemSelecionado] = useState(null)
    const chartRef = useRef(null)

    useEffect(() => {
        // --- Primeira planilha ---
        fetch(url)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "array" })
                const sheet = workbook.Sheets["Resultados"]

                if (sheet) {
                    const json = XLSX.utils.sheet_to_json(sheet)
                    const dadosAbreviados = json.map(item => ({
                        ...item,
                        ItensAbreviados: item.Itens ? item.Itens.substring(0, 3) : ""
                    }))
                    setDados1(dadosAbreviados)
                    setMediaGeral1(
                        dadosAbreviados.reduce((acc, item) => acc + item.Resultado, 0) /
                            dadosAbreviados.length || 0
                    )
                }
            })

        // --- Segunda planilha ---
        fetch(url2)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "array" })
                const sheet = workbook.Sheets["Resultados"]

                if (sheet) {
                    const json = XLSX.utils.sheet_to_json(sheet)
                    console.log("JSON da aba Resultados (url2):", json)

                    const dadosAbreviados = json.map(item => ({
                        ...item,
                        ItensAbreviados: item.Itens ? item.Itens.substring(0, 3) : ""
                    }))
                    setDados2(dadosAbreviados)
                    setMediaGeral2(
                        dadosAbreviados.reduce((acc, item) => acc + item.Resultado, 0) /
                            dadosAbreviados.length || 0
                    )
                }
            })
    }, [])

    const handleBarClick = (data, index) => {
        setItemSelecionado(itemSelecionado?.index === index ? null : { ...data, index })
    }

    return (
        <Container>
            {/* --- Gráfico da primeira planilha --- */}
            <Medias>
                {dados1.length > 0 && (
                    <>
                        <p>Vigilância Natural (média): {dados1[0]["1 Vigilância Natural"]}%</p>
                        <p>Reforço Territorial e Manutenção (média): {dados1[0]["2 Reforço Territorial e Manutenção"]}%</p>
                        <p>Controle de Acesso Natural (média): {dados1[0]["3 Controle de Acesso Natural"]}%</p>
                        <p>Atividade e Análise de Risco Situacional (média): {dados1[0]["4 Atividade e Análise de Risco Situacional"]}%</p>
                        <hr />
                        <p style={{ textAlign: "right" }}>
                            Média geral: {mediaGeral1.toFixed(2)}%
                        </p>
                    </>
                )}
            </Medias>

            <ResponsiveContainer height={600} minWidth={300}>
                <BarChart
                    ref={chartRef}
                    data={dados1}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <XAxis type="number" dataKey="Resultado" domain={[0, 100]} />
                    <YAxis
                        type="category"
                        dataKey="ItensAbreviados"
                        width={50}
                        tick={{ fontSize: 12 }}
                    />
                    <Bar
                        dataKey="Resultado"
                        fill="#8884d8"
                        onClick={handleBarClick}
                        style={{ cursor: "pointer" }}
                    />
                </BarChart>
            </ResponsiveContainer>

            {/* --- Gráfico da segunda planilha --- */}
            <Medias>
                {dados2.length > 0 && (
                    <>
                        <hr />
                        <p style={{ textAlign: "right" }}>
                            Média geral (segunda planilha): {mediaGeral2.toFixed(2)}%
                        </p>
                    </>
                )}
            </Medias>

            <ResponsiveContainer height={600} minWidth={300}>
                <BarChart
                    data={dados2}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <XAxis type="number" dataKey="Resultado" domain={[0, 100]} />
                    <YAxis
                        type="category"
                        dataKey="ItensAbreviados"
                        width={50}
                        tick={{ fontSize: 12 }}
                    />
                    <Bar
                        dataKey="Resultado"
                        fill="#82ca9d"
                        onClick={handleBarClick}
                        style={{ cursor: "pointer" }}
                    />
                </BarChart>
            </ResponsiveContainer>

            {itemSelecionado && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#fff",
                        border: "2px solid #8884d8",
                        borderRadius: 8,
                        padding: "15px 20px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                        maxWidth: "80vw",
                        wordBreak: "break-word"
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 8, fontSize: 14 }}>
                        {itemSelecionado.Itens}
                    </div>
                    <div style={{ color: "#666", fontSize: 13 }}>
                        Resultado: <strong>{itemSelecionado.Resultado}%</strong>
                    </div>
                    <div style={{ color: "#666", fontSize: 13 }}>
                        Conclusão: <strong>{itemSelecionado.Conclusão}</strong>
                    </div>
                    <button
                        onClick={() => setItemSelecionado(null)}
                        style={{
                            position: "absolute",
                            top: 5,
                            right: 8,
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontSize: 16,
                            color: "#666"
                        }}
                    >
                        ×
                    </button>
                </div>
            )}
        </Container>
    )
}
