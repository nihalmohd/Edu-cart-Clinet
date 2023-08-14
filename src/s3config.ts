import AWS from "aws-sdk"

export const s3cofing ={
    bucketName:import.meta.env.VITE_AWS_BUCKET as string,
    region:import.meta.env.VITE_AWS_REGION , 
    accesskeyId:import.meta.env.VITE_AWS_ACCESSKEYID,
    secretAccessKey:import.meta.env.VITE_AWS_SECRETKEY
};

const S3_BUCKET = s3cofing.bucketName
const REGION = s3cofing.region

AWS.config.update({
    accessKeyId: s3cofing.accesskeyId,
    secretAccessKey: s3cofing.secretAccessKey,
  });

  export const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  export const s3URL = `https://s3.amazonaws.com/${S3_BUCKET}`;