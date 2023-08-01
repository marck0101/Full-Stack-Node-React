// import { Grid } from "@mui/material"
import Dashboard from "./Dashboard"

const Home = () => {
    const info = [{
        id: 1,
        nCliente: 1010,
        mesReferencia: '01/01/2020',
        dataVencimento: '01/01/2020',
        energiaEletrica: {
            kWh: "100",
            valorUnit: "5",
            valorRS: "500"
        },
        enCompICMS: {
            kWh: "100",
            valorUnit: "5",
            valorRS: "500"
        },
        contPubMun: {
            valorRS: "50"
        },
        valorTotal: {
            valorRS: "1000"
        },
    },
    ]
    return (
        <>

            <Dashboard Teste={info} />

        </>
    )
}
export default Home