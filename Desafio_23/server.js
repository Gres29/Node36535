const path = require("path");

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

const fastify = require("fastify")({ logger: true });

fastify.register(require(path.join(__dirname, "routes/v1/books")), {
  prefix: "v1",
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
