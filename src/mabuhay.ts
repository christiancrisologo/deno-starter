import { desc, run, task } from "https://raw.github.com/srackham/drake/master/mod.ts";

desc("Simple call with Deno");
task("mabuhay", [], function() {
  console.log("Mabuhay daigdig!");
});

run()