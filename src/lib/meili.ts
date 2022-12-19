import "./dotenv";
import MeiliSearch from "meilisearch";

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: process.env.MEILI_API_KEY,
});

export default client;
