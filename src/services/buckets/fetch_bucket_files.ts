import minioClient from "@/lib/minio";
import { MINIO_API_URL } from "astro:env/server";

const generatePublicMinioUrl = (bucket: string, object: string) => {
  return `https://${MINIO_API_URL}/${bucket}/${object}`;
}

export default async function fetchBucketFiles(
  bucketName: string,
  folderName = ""
) {

  const images: string[] = await new Promise((resolve, reject) => {
    const objectsListTemp: any[] = [];
    const stream = minioClient.listObjectsV2(bucketName, folderName, true, '');
    stream.on('data', obj => objectsListTemp.push(generatePublicMinioUrl(bucketName, obj.name as string)));
    stream.on('error', reject);
    stream.on('end', () => {
      resolve(objectsListTemp);
    });
  });
  return images.slice(0, 10);
}
