This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The aim of this project is to create something close to an ERP to manage work orders and the entire ecosystem of a maintenance company

## Getting Started

To run the development server:

npm run dev **or** yarn dev

#### Prerequisites

##### _MongoDB Atlas_:
This project uses MongoDB Atlas as a database, so it requires to create a cluster and some collections to setup crrectly the routes. It's possible to be replaced as needed, but it requres an carefully check on all files on the api folder and some files out.

##### _Next-Auth_ and _Auth0_
This project uses a thirdpart authentication microservice, Auth0. So, to run perfectly, it has to pass credentials from a Auth0 application. For Next-auth, it has only one setup, an url for callback. As default, on a development envirionment, it cam be just a  localhost 


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


##### Versions/Features
- 0.2.0: Add Auth0 as a thirdpart login handler and formik/yup to handle forms
- 0.1.0: Create the project, added conection to database and some pages