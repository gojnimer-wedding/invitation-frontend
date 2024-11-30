import NocoDB from "@/lib/nocodb";

const getInvite = async (id: string) => {
    const invite = await NocoDB.dbViewRow
        .findOne(
            "noco",
            "pk9tnb5adbhghj1",
            "m8v8mxe3z6vw5bz",
            "vw6rle2g8iou7orv", {
            "where": `(Slug,eq,${id})`
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.error(error);
        });
    return invite;
}

export default getInvite;