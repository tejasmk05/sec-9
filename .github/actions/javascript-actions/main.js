const core = require('@actions/core');
const github = require('@actions/github');

function run(){
    core.notice("My first javascript action");
}
run();