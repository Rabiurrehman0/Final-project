 About Me

 Hi, I'm Rabi-ur-Rehman! 👋
 
I'm a full stack developer...

🔭 I’m currently working on Food hungama(Replica of food panda)

🌱 I’m currently learning MERN Stack developer from bano Qabil

👯 I’m looking to collaborate on frontend projects

🤝 I’m looking for help with JS project

💬 Ask me about HTML,CSS,JS

📫 How to reach me rabiurrehman0318@gmail.com


# Rabi's Cafe - MERN Stack Website

Welcome to Rabi's Cafe, a dynamic web platform specializing in selling bakery and sweet items. This project utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack to provide a feature-rich and scalable solution for your cafe.


## Demo

https://jade-clear-chicken.cyclic.app/


## Features

- Authentication: Implement JWT-based authentication for secure user registration and login.
- Brands Management: Easily manage cafe brands with Create, Read, Update, and Delete (CRUD) operations.
- Category Management: Organize products into categories with CRUD functionality.
- Product Management: Efficiently manage bakery and sweet items with CRUD operations.
- Image Upload: Store product images securely using Firebase Storage.
- Responsive UI: Ensure a seamless user experience on various devices with a responsive design.
- Scalable: Built with scalability in mind, allowing for easy expansion and customization.
- Robust Backend: Utilize Node.js and Express.js to create a robust backend for handling API requests.

## Technologies
### Frontend:
- React.js: A JavaScript library for building user interfaces.
- Context API: Manage application state efficiently.
- Axios: Make HTTP requests to the backend.
- Firebase: Handle image storage.
### Backend:
- Node.js: A runtime environment for running JavaScript on the server.
- Express.js: A minimalist web application framework for Node.js.
- MongoDB: A NoSQL database for storing data.
- JWT: JSON Web Tokens for user authentication.

## Authentication
This project uses JWT-based authentication for user registration and login. Users can create accounts, log in, and access protected routes.

## Database
The application utilizes MongoDB as the database for storing information related to brands, categories, products, and user data.

## Image Upload
Product images are securely stored using Firebase Storage. This ensures efficient and secure handling of images associated with your bakery and sweet items.


## API Reference

#### User API's

```http
  localhost:1234/api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### login API

```http
 localhost:1234/api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |

#### Get all users

```http
 localhost:1234/api/getallusers
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

#### Get User By Email

```http
 localhost:1234/api/userbyemail/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Email of item to fetch |

#### update User

```http
 localhost:1234/api/update-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### User Delete

```http
 localhost:1234/api/delete-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Product API's

#### Post Product

```http
http://localhost:1234/api/add-products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


#### Get all product

```http
http://localhost:1234/api/get-all-products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

#### Get Product by Brand

```http
http://localhost:1234/api/get-product-by-brand/:brand
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

#### Get product by Category

```http
http://localhost:1234/api/get-product-by-category/:category

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


#### Get Product by ID

```http
http://localhost:1234/api/get-product-by-id/:_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|


#### DELETE PRODUCT

```http
http://localhost:1234/api/delete-products
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

#### Update Product

```http
http://localhost:1234/api/update-products
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

Rest of They ApI's Are

Category:
CREATE:http://localhost:1234/api/add-category
GET ALL CAT:http://localhost:1234/api/get-all-categories
BY NAME:http://localhost:1234/api/categorybyname/:name
DELETE CAT:http://localhost:1234/api/delete-category
UPDATE CAT:http://localhost:1234/api/update-category

Brands:
CREATE:http://localhost:1234/api/add-brand
BRAND BY ID: http://localhost:1234/api/brandbyid/:_id
 BRAND BY NAME:http://localhost:1234/api/brandbyname/:BrandName
GET ALL BRANDS:http://localhost:1234/api/get-all-brands
UPDATE BRANDS:http://localhost:1234/api/update-brand
DELETE :http://localhost:1234/api/delete-brand


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.linkedin.com/in/rabi-ur-rehman-840862182//)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rabi-ur-rehman-840862182/)



