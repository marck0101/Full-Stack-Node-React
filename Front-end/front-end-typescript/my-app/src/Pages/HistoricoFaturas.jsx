/* eslint-disable react-hooks/exhaustive-deps */
// HistoricoFaturas.jsx
import React, { useState, useEffect } from "react";
import Chart from "../Components/Chart"; // Verifique o caminho correto aqui

const HistoricoFaturas = () => {
  // Dados fake das faturas
  const fakeInvoices = [
    {
      id: 1,
      invoiceNumber: "INV-001",
      issueDate: "2023-07-15",
      dueDate: "2023-07-30",
      amount: 100.0,
      status: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "INV-002",
      issueDate: "2023-06-28",
      dueDate: "2023-07-28",
      amount: 75.5,
      status: "Paid",
    },
    {
      id: 3,
      invoiceNumber: "INV-003",
      issueDate: "2023-06-15",
      dueDate: "2023-07-15",
      amount: 200.0,
      status: "Unpaid",
    },
    // Adicione mais objetos aqui para criar mais dados fictícios de faturas
  ];

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Simulação de chamada à API para obter os dados das faturas (remova na implementação real com uma API real)
    // Neste exemplo, estamos usando dados fake diretamente no componente
    setInvoices(fakeInvoices);
  }, []);

  return (
    <>
      <div style={{ marginTop: 60, marginLeft: 20 }}>
        <h1>Historico Faturas</h1>
        <Chart invoices={invoices} />
      </div>
    </>
  );
};

export default HistoricoFaturas;
