import appwrite from "@/lib/appwrite";
import { APPWRITE_PROJECT_ID, APPWRITE_URL } from "astro:env/server";
import { Storage } from "node-appwrite";

export default async function fetchBucketFiles(bucketId: string) {
  var images: string[] = [];
  const storageInstance = new Storage(appwrite);
  const { files } = await storageInstance.listFiles(bucketId).catch((e) => e);
  if (files.length)
    files.forEach((file: any) => {
      const url = `${APPWRITE_URL}/storage/buckets/${bucketId}/files/${file.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      images.push(url);
    });
  return images;
}
