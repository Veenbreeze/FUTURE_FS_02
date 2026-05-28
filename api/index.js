import { createServerEntry } from "../dist/server/index.js";

export default function handler(req, res) {
  return createServerEntry({ req, res });
}
