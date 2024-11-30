import NocoDB from "@/lib/nocodb";
import { defineAction } from "astro:actions";
import { z } from 'astro:schema';


const AvaiableStatus = ["Aguardando envio", "Aguardando confirmação", "Convite Aceito", "Convite Recusado"] as const

const updateInviteStatus = defineAction({
    input: z.object({
        rowId: z.number(),
        status: z.enum(AvaiableStatus)
    }),
    handler: async ({ rowId, status }) => {
        console.log(rowId)
        const t = await NocoDB.dbViewRow
            .update(
                "noco",
                "pk9tnb5adbhghj1",
                "m8v8mxe3z6vw5bz",
                "vw6rle2g8iou7orv",
                rowId,
                {
                    "Status": status
                }
            )
            .then(function (data) {
                return (data as any);
            })
            .catch(function (error) {
                console.error(error);
            });
        return t
    }
})

export default updateInviteStatus;