This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The aim of this project is to create something close to an ERP to manage work orders and the entire ecosystem of a maintenance company

## Getting Started

To run the development server:

npm run dev **or** yarn dev

#### Prerequisites

This projeject use MongoDB Atlas as a datrabase. So, you need to edit **.env.local.example** file and add your credentials.
At this point, the software needs some collections on your MongoDB to run fine. Are they: **clientes** and **funcionario**

You have to pass at less an "nome" and "pass" attributes to your "funcionario" collection

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
