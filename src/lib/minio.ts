import { MINIO_API_ACCESS_KEY, MINIO_API_SECRET_KEY, MINIO_API_URL } from "astro:env/server";
import { Client } from "minio";

const hostname = MINIO_API_URL.replace(/(^\w+:|^)\/\//, '')

const minioClient = new Client({
  endPoint: hostname,
  useSSL: true,
  accessKey: MINIO_API_ACCESS_KEY,
  secretKey: MINIO_API_SECRET_KEY,
})

export default minioClient;