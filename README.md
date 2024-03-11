[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[VUE__BADGE]: https://img.shields.io/badge/VueJS-fff?style=for-the-badge&logo=vue
[NEST__BADGE]: https://img.shields.io/badge/nest-7026b9?style=for-the-badge&logo=nest
[GRAPHQL__BADGE]: https://img.shields.io/badge/GraphQL-e10098?style=for-the-badge&logo=graphql
[JAVA_BADGE]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[SPRING_BADGE]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[MONGO_BADGE]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[AWS_BADGE]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white

<h1 align="center" style="font-weight: bold;">Recicle Mais - Back-End💻</h1>

![nest][NEST__BADGE]
![typescript][TYPESCRIPT__BADGE]
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>Recicle mais is a recycling flow control app that allows, with practicality, agile communication between a recycler and a collector so that the materials to be recycled reach the collection point.</b>
</p>

<h2> Install </h2>

```bash
npm install
```

<h2 id="started">🚀 Getting started</h2>

```bash
npm run start:dev
```

<h3>Prerequisites</h3>

- [NodeJS]
- [Nest]
- [JWT]
- [bcrypt]

<h3>Cloning</h3>

How to clone your project

```bash
git clone git@github.com:yraffic02/recicle-mais-back.git
```

<h3>Starting</h3>

How to start the back-end project

```bash
cd recicle-mais-back
npm run start:dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here has the list of the main routes until now, and what are their expected request bodies.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>POST /user</kbd> | register user
| <kbd>DELETE /delete-user/:id</kbd> | delete selected user 
| <kbd>POST /auth/login</kbd> | User Login 
| <kbd>POST /updatePass/update-password</kbd> | Update user password 

<h3 id="post-user-register">POST /user</h3>
To register user.

**REQUEST**

```json
{
  "fullname": "Zé da Manga",
  "password": "123456",
  "email": "zedamanga@gmail.com",
  "phone": "71933333333",
  "user_type": "coletor",
  "avatar": "any"
}
```

**RESPONSE**

```json
{
  "id": 2,
  "fullname": "Zé da Manga",
  "password": "$2b$10$0vYiRJL73/tBV2CStfGXz.sPvd2zHXBM8LIqnLNgZGexZm4u48vUq",
  "email": "zedamanga@gmail.com",
  "phone": "71933333333",
  "user_type": "coletor",
  "avatar": "qualquer"
}
```

<h3 id="delete-user">DELETE /delete-ser/:id</h3>
To delete user.

**REQUEST**
/delete-ser/2

**RESPONSE**

```bash
Usuário removido com sucesso.
```

<h3 id="auth-login">POST   /auth/login</h3>
To log in and receive an authentication token.

**REQUEST**

```json
{
  "email": "zedamanga@gmail.com",
  "password": "123456"
}
```

**RESPONSE**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMDE2MzE5NCwiZXhwIjoxNzEwMjQ5NTk0fQ.mq9vh35k_P_4GTO--Pi2hVkH1ipraFN6rIhVvbblEKE"
}
```

<h3 id="update-password">POST   /updatePass/update-password</h3>

**REQUEST**

```json
{
  "email": "zedamanga@gmail.com",
  "newPassword": "123456"
}
```

**RESPONSE**

```json
{
  "message": "Senha atualizada com sucesso."
}
```

<h2 id="colab">🤝 Developores</h2>

Back-end developers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Glaucia-S-Castro">
        <sub>
          <p>Glaucia Castro</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/isabeldiana">
        <sub>
          <p>Isabel Diana</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/EduardoNunes">
        <sub>
          <p>Eduardo L. Nunes</p>
        </sub>
      </a>
    </td>
  </tr>
</table>
