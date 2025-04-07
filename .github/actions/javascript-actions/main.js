const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    //get input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucketRegion', { required: true });
    const bucketFolder = core.getInput('bucketFolder', { required: true });

    //upload to S3 bucket
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${bucketFolder} ${s3Uri} --region ${bucketRegion}`);
    
    //Output the URL details
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}
run();