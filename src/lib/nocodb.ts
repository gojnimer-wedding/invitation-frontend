import { NOCODB_API_TOKEN, NOCODB_API_URL } from "astro:env/server";
import { Api } from "nocodb-sdk";

const NocoDB = new Api({
    baseURL: NOCODB_API_URL,
    headers: {
        "xc-token": NOCODB_API_TOKEN
    }
})

export default NocoDB;