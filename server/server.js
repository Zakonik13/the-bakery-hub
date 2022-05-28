const express = require("express");
const db = require("./config/connection");
var cors = require("cors");

// import middleware function for verifying token
const { authMiddleware } = require("./utils/auth");

// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const http = require("http");

// To serve up React front-end code in production
const path = require("path");

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;

// require logic for integrating with Express
const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before, plus the drain plugin
  // creates a new Apollo server and passes in our schema data
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // more required logic for integrating with Express
  await apolloServer.start();
  // integrate our Apollo server with the Express application as middleware
  apolloServer.applyMiddleware({ app, path: "/" });

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

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on PORT ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers);
