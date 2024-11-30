import { AnimatedSubscribeButton } from "@/components/ui/subscribe-button";
import { actions } from "astro:actions";
import { CheckIcon } from "lucide-react";
import { useCallback, useRef } from "react";
import useSWRMutation from "swr/mutation";
import ThanksModal from "./thanks-modal";

interface Invite {
  Id: number;
  Status:
    | "Aguardando envio"
    | "Aguardando confirmação"
    | "Convite Aceito"
    | "Convite Recusado";
}
export default function Options({ invite }: { invite: Invite }) {
  const thanksModalRef = useRef(null);
  const { trigger, isMutating, data } = useSWRMutation(
    [invite.Id],
    (
      [id],
      {
        arg,
      }: {
        arg: Invite["Status"];
      },
    ) =>
      actions.nocodb
        .updateInviteStatus({
          rowId: id,
          status: arg,
        })
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        if (data.Status === "Convite Aceito") {
          setTimeout(() => {
            (thanksModalRef as any).current.open();
          }, 1000);
        }
      },
    },
  );

  const isInviteAccepted = (data ?? invite).Status === "Convite Aceito";

  const isInviteRecused = (data ?? invite).Status === "Convite Recusado";

  const onButtonClick = useCallback(() => {
    if (isMutating) return;
    if (isInviteAccepted) return (thanksModalRef as any).current.open();
    if (isInviteRecused) return trigger("Aguardando confirmação");
    trigger("Convite Aceito");
  }, [isMutating, trigger, isInviteAccepted]);

  if (isInviteRecused)
    return (
      <div className="flex flex-1 flex-col w-full gap-4 py-12 px-12">
        <p className="text-muted-foreground w-fit self-center">
          Que pena que você não poderá comparecer! 😔{" "}
          <span
            className="hover:text-[#db6f82] cursor-pointer underline"
            onClick={onButtonClick}
          >
            Caso mude de ideia, você pode clicar aqui para confirmar sua
            presença.
          </span>{" "}
          Vamos adorar te ter conosco nesse dia especial! 💕
        </p>
      </div>
    );
  return (
    <>
      <AnimatedSubscribeButton
        isLoading={isMutating}
        buttonColor="#db6f82"
        buttonTextColor="white"
        onClick={onButtonClick}
        subscribeStatus={isInviteAccepted}
        initialText={
          <span className="group inline-flex items-center">
            Confirmar presença💃
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Presença Confirmada{" "}
          </span>
        }
      />
      <p className="text-muted-foreground w-full text-center pt-2">
        Não poderá comparecer?{" "}
        <span
          className="hover:text-[#db6f82] cursor-pointer underline"
          onClick={() => trigger("Convite Recusado")}
        >
          Clique aqui para recusar o convite.
        </span>
      </p>
      <ThanksModal ref={thanksModalRef} />
    </>
  );
}
