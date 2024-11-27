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
            <Drawer.Title className="font-bhood text-center text-[4.2rem] md:text-[6rem] !text-[#db6f82]">
              Confirmação Recebida!
            </Drawer.Title>
            <div className="px-4">
              <p className="text-center mt-4 text-gray-600 font-dancing text-[1.5rem] text-muted-foreground">
                Que alegria saber que você estará presente! Será um dia
                inesquecível, e sua companhia o tornará ainda mais especial. 💕
              </p>
            </div>
            <div className="mt-6 space-y-2 px-4">
              <p className="mt-4 text-gray-600 text-start text-[1rem]">
                Para te ajudar com os preparativos, aqui estão alguns links
                úteis:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://noivos.casar.com/karine-e-guilherme-2025-01-17"
                  target="_blank"
                  className=" relative w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#db6f82] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#db6f82] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    🎁
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Lista de Presentes
                  </span>
                </a>
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#db7b8d] rounded-xl group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#da6379] rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#db7b8d] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    🎁 Lista de Presentes
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-6 text-center mb-10">
              <p className="text-gray-600">
                Dúvidas? <span>Entre em contato conosco!</span> 💌
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
});
export default ThanksModal;
