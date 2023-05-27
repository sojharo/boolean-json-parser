const express = require("express");
const evaluate = require("./utils/evaluate");
const NodeCache = require("node-cache");

const app = express();
const port = 3000;

const cache = new NodeCache();

app.post("/", express.json(), (req, res) => {
  try {
    const payload = req.body;
    const key = btoa(JSON.stringify(payload));

    const cacheHit = cache.get(key);

    if (cacheHit !== undefined) {
      return res.status(200).send(cacheHit);
    }

    const result = evaluate(payload);

    cache.set(key, result, 86400); // set in cache for one day

    res.status(200).send(result);
  } catch (e) {
    res.status(501).send({ error: e });
  }
});

app.listen(port, () => {
  console.log(`Dema app listening on port ${port}`);
});
