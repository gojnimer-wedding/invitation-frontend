import { Drawer } from "vaul";

export default function VaulDrawer() {
  /*   useEffect(() => {
    const invite = async () => {
      console.log(await getInvitation("1"));
    };
    invite();
  }, []); */
  return (
    <Drawer.Root>
      <div className="flex flex-1 flex-col w-full gap-4 py-12">
        <Drawer.Trigger className="text-2xl uppercase text-white bg-[#db6f82] w-full mx-auto px-4 py-6">
          Confirmar presença 💃
        </Drawer.Trigger>
        <button
          role="link"
          className="text-muted-foreground w-fit self-center relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
        >
          Não poderei comparecer, {":("}
        </button>
      </div>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
            />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-gray-900">
                Confirmar presença.
              </Drawer.Title>
              <p className="text-gray-600 mb-2">
                This component can be used as a Dialog replacement on mobile and
                tablet devices. You can read about why and how it was built{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://emilkowal.ski/ui/building-a-drawer-component"
                >
                  here
                </a>
                .
              </p>
              <p className="text-gray-600 mb-2">
                This one specifically is the most simplest setup you can have,
                just a simple drawer with a trigger.
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
