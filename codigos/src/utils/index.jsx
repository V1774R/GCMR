
// Como o excel é um lixo vou precisar converter as dadas aqui.
// Lembrar de fazer a versão database e remover isso.
const converterDataExcel = (serial) => {
    const excelEpoch = new Date(1899, 11, 30) // 30/12/1899
    const jsDate = new Date(excelEpoch.getTime() + serial * 24 * 60 * 60 * 1000)
    return jsDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

const converterTimeExcel = (serial) => {
  const totalSeconds = serial * 24 * 60 * 60
  let hours = Math.floor(totalSeconds / 3600)
  let minutes = Math.round((totalSeconds % 3600) / 60)

  if (minutes === 60) {
    minutes = 0
    hours += 1
  }

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
}


const converterDataParaBr = (data) => {
    const date = new Date(data)
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export const utils = {
    converterDataExcel,
    converterDataParaBr,
    converterTimeExcel
}
