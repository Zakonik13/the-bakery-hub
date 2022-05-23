// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");

// import middleware function for verifying token
const { authMiddleware } = require("./utils/auth");

// To serve up React front-end code in production
const path = require("path");

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  // require logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Same ApolloServer initialization as before, plus the drain plugin
  // creates a new Apollo server and passes in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // more required logic for integrating with Express
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app, path: "/" });

  // Serve up static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
  });

  await new Promise((resolve) => httpServer.listen({ port: PORT, resolve }));
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);

  // db.once("open", () => {
  //   server.listen(PORT, () => {
  //     console.log(`API server running on PORT ${PORT}!`);
  //     // log where we can go to test our GQL API
  //     console.log(
  //       `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
  //     );
  //   });
  // });
}

startApolloServer(typeDefs, resolvers);
