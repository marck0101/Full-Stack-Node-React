// // api.js

// const fakeInvoices = [
//   {
//     id: 1,
//     invoiceNumber: "INV-001",
//     issueDate: "2023-07-15",
//     dueDate: "2023-07-30",
//     amount: 100.0,
//     status: "Paid",
//   },
//   {
//     id: 2,
//     invoiceNumber: "INV-002",
//     issueDate: "2023-06-28",
//     dueDate: "2023-07-28",
//     amount: 75.5,
//     status: "Paid",
//   },
//   {
//     id: 3,
//     invoiceNumber: "INV-003",
//     issueDate: "2023-06-15",
//     dueDate: "2023-07-15",
//     amount: 200.0,
//     status: "Unpaid",
//   },
//   // Add more invoice objects here to create additional fake data
// ];

// // Function to get all invoices
// export const getInvoicesFromDatabase = () => {
//   // Simulate API call delay with setTimeout (remove in production)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(fakeInvoices);
//     }, 500);
//   });
// };

// export default fakeInvoices;