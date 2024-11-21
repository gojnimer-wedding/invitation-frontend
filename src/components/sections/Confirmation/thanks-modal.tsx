import { forwardRef, useImperativeHandle, useState } from "react";
import { Drawer } from "vaul";

const ThanksModal = forwardRef(function ThanksModal(_, ref) {
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));
  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
            />
            <Drawer.Title className="font-bhood text-center text-[4rem] md:text-[6rem] !text-[#db6f82]">
              Confirmação Recebida!
            </Drawer.Title>
            <div className="px-4">
              <p className="text-center mt-4 text-gray-600 font-dancing text-[1.5rem] text-muted-foreground">
                Que alegria saber que você estará presente! Será um dia
                inesquecível, e sua companhia o tornará ainda mais especial. 💕
              </p>
            </div>
            <div className="mt-6 space-y-4 px-4">
              <p className="mt-4 text-gray-600 text-start text-[1rem]">
                Para te ajudar com os preparativos, aqui estão alguns links
                úteis:
              </p>
              <a
                href="#"
                className="block w-full text-center bg-[#db6f82] text-white py-2 rounded-lg  transition"
              >
                🎁 Lista de Presentes
              </a>
              <a
                href="#"
                className="block w-full text-center bg-[#db6f82] text-white py-2 rounded-lg  transition"
              >
                🕒 Programação do Casamento
              </a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Dúvidas? Entre em contato conosco! 💌
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
});
export default ThanksModal;
