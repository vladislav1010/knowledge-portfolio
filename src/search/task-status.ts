import client from "../lib/meili";

(async () => {
  const taskUid =
    process.argv[2] !== undefined ? Number(process.argv[2]) : null;

  if (taskUid) {
    console.log(await client.getTask(taskUid));
  }
})();
