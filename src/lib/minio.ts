import { MINIO_API_ACCESS_KEY, MINIO_API_SECRET_KEY, MINIO_API_URL } from "astro:env/server";
import { Client } from "minio";

const url = new URL(MINIO_API_URL)

const minioClient = new Client({
  endPoint: url.hostname,
  useSSL: true,
  accessKey: MINIO_API_ACCESS_KEY,
  secretKey: MINIO_API_SECRET_KEY,
})

export default minioClient;