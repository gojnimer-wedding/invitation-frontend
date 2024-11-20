import NocoDB from "@/lib/nocodb";

const getInvitation = async (id: string) => {
    const status = await NocoDB.dbViewRow
        .list(
            "noco",
            "pk9tnb5adbhghj1",
            "m8v8mxe3z6vw5bz",
            "vw6rle2g8iou7orv", {
            "offset": 0,
            "where": ""
        })
        .then(function (data) {
            return (data.list[0] as any).Status;
        })
        .catch(function (error) {
            console.error(error);
        });
    return status;
}

export default getInvitation;