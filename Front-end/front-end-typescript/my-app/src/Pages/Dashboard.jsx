import { Card, Grid, TextField } from "@mui/material";
import React from "react";

const Dashboard = () => {
  const Texto = {
    nCliente: "Número cliente",
    mesReferencia: "Mês de referência",
    dataVencimento: "Data de vencimento",
  };
  const cabecalho = "DASHBOARD";

  const info = [
    {
      id: 1,
      nCliente: 1010,
      mesReferencia: "01/01/2020",
      dataVencimento: "01/01/2020",
      energiaEletrica: {
        kWh: "100",
        valorUnit: "5",
        valorRS: "500",
      },
      enCompICMS: {
        kWh: "100",
        valorUnit: "5",
        valorRS: "500",
      },
      contPubMun: {
        valorRS: "50",
      },
      valorTotal: {
        valorRS: "1000",
      },
    },
  ];
  return (
    <div style={{ marginTop: 70, marginLeft: 20, maxWidth: "100%" }}>
      <Grid container spacing={2} xs={12} lg={12}>
        {info.map((item) => (
          <Grid item key={item.id}>
            <Grid container style={{ display: "flex", flexDirection: "column", alignContent: "space-between", height: "100vh" }}>
              <Grid item>
                <h3>{cabecalho.toLocaleUpperCase()}</h3>
              </Grid>

              <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                <h5>{Texto.nCliente.toLocaleUpperCase()}: {item.nCliente}</h5>
                <h5>{Texto.mesReferencia.toLocaleUpperCase()}: {item.mesReferencia}</h5>
                <h5>{Texto.dataVencimento.toLocaleUpperCase()}: {item.dataVencimento}</h5>
              </Grid>

              <Card style={{ marginTop: 10, padding: 15 }}>
                <Grid item>
                  <h5>Energia Elétrica</h5>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <TextField disabled label="kWh" variant="outlined" value={item.energiaEletrica.kWh} />
                    <TextField disabled label="Valor Unitário" variant="outlined" value={item.energiaEletrica.valorUnit} />
                    <TextField disabled label="Valor (R$)" variant="outlined" value={item.energiaEletrica.valorRS} />
                  </div>
                </Grid>
              </Card>

              <Card style={{ marginTop: 10, padding: 15 }}>
                <Grid item>
                  <h5>En. Comp. ICMS</h5>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <TextField disabled label="kWh" variant="outlined" value={item.enCompICMS.kWh} />
                    <TextField disabled label="Valor Unitário" variant="outlined" value={item.enCompICMS.valorUnit} />
                    <TextField disabled label="Valor (R$)" variant="outlined" value={item.enCompICMS.valorRS} />
                  </div>
                </Grid>
              </Card>

              <Card spacing={2} style={{ marginTop: 10, padding: 15 }} xs={12} lg={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} lg={6}>
                    <h5>Cont. Pub. Mun.</h5>
                    <div>
                      <TextField disabled label="Valor (R$)" variant="outlined" value={item.contPubMun.valorRS} />
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6}>
                    <h5>Valor Total</h5>
                    <div>
                      <TextField disabled label="Valor (R$)" variant="outlined" value={item.valorTotal.valorRS} />
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
