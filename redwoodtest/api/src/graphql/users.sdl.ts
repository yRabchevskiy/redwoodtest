export const schema = gql`
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    age: String!
    rank: String!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    age: String!
    rank: String!
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    age: String
    rank: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
