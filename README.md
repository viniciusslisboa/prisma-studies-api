## Basic

---

- CRUD
  - CRUD de usuários
    - [x] Create
    - [x] Read
    - [x] Update
    - [x] Delete
  - CRUD de Postagens
    - [x] Create
    - [x] Read
    - [x] Update
    - [x] Delete
  - CRUD de Grupos
    - [x] Create
    - [x] Read
    - [x] Update
    - [x] Delete
- Atividades
  - Atividades de Comentários
    - [x] Adicionar comentários
    - [x] Deletar comentários
  - Atividades do Perfil
    - [x] Criar perfil
    - [x] Atualizar perfil
    - [x] Mostrar informações sobre o perfil
  - Atividades do Grupos
    - [x] Adicionar usuários
    - [x] Remover usuários

## Relations

---

### N - N

Intenção - Criar um sistema onde o usuário possa criar grupos, adicionar e deletar membros.

Solução - Criar um método onde o usuário adiciona os membros do grupo.

- Criei um método que atualiza os grupos fazendo um filtro pelo “Id” do grupo, passado pela url na chamada http, no método “data”, seleciono o campo relativo aos membros do grupo, depois uso método “connect” passando o “id” do usuário, recuperado do corpo da requisição.

### 1 - N

Intenção - Criar um sistema onde o usuário possa criar postagens e adicionar comentários nessas postagens.

Solução - Criar um relacionamento no banco de dados onde exista a entidade de “user”, e cada usuário possui várias postagens, e vários comentários, existindo também a entidade “post” que possui referência para um usuário e possui vários comentários, e por último a entidade “comment” que possui referência para a postagem em que foi feito e do usuário em que comentou.

### 1 - 1

Intenção - Criar um sistema onde o usuário possar criar um perfil, contendo url da foto de perfil, idade, e uma breve descrição.

Solução - Criar relacionamento no banco onde a entidade “profile” faz relacionamento com a entidade “user”, sendo assim um usuário pode ou não ter um perfil, criando relação um pra um.
