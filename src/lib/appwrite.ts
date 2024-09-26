import {
  APPWRITE_PROJECT_ID,
  APPWRITE_URL,
  APPWRITE_API_KEY,
} from "astro:env/server";
import { Client } from "node-appwrite";

const appwrite = new Client();
appwrite
  .setEndpoint(APPWRITE_URL)
  .setProject(APPWRITE_PROJECT_ID)
  .setKey(APPWRITE_API_KEY);

export default appwrite;
