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
            <Drawer.Title className="font-medium mb-4 text-gray-900">
              🎉 Obrigado por confirmar! 💕
            </Drawer.Title>
            <div className="text-center">
              <p className="mt-4 text-gray-600">
                Estamos muito felizes por saber que você estará conosco nesse
                dia tão especial! Sua presença tornará nosso momento ainda mais
                mágico. 💖
              </p>
              <p className="mt-4 text-gray-600">
                Para te ajudar com os preparativos, aqui estão alguns links
                úteis:
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block w-full text-center bg-[#db6f82] text-white py-2 rounded-lg  transition"
              >
                📍 Lista de presentes
              </a>
              <a
                href="#"
                className="block w-full text-center bg-[#db6f82] text-white py-2 rounded-lg  transition"
              >
                🏨 Hotéis Próximos
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
