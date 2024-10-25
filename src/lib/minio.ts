import { MINIO_API_ACCESS_KEY, MINIO_API_SECRET_KEY, MINIO_API_URL } from "astro:env/server";
import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: MINIO_API_URL,
  useSSL: true,
  accessKey: MINIO_API_ACCESS_KEY,
  secretKey: MINIO_API_SECRET_KEY,
})

export default minioClient;