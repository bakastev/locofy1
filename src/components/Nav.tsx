import { FunctionComponent, useCallback } from "react";

const Nav: FunctionComponent = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/projects");
  }, []);

  const onLinkContainer22Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/journal");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/stack");
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/about");
  }, []);

  const onLinkContainer5Click = useCallback(() => {
    window.open("https://navy-labeling-415471.framer.app/kontakt");
  }, []);

  const onLinkContainer6Click = useCallback(() => {
    window.open("https://instagram.com/baka.steve");
  }, []);

  return (
    <div className="w-64 bg-navy-labeling-415471-framer-app-2002x1208-default-black box-border flex flex-col items-center justify-start pt-10 px-[23px] pb-[698px] gap-[34px_0px] z-[2] text-left text-sm text-navy-labeling-415471-framer-app-2002x1208-default-nero font-navy-labeling-415471-framer-app-2002x1208-default-inter-regular-1488 border-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft lg:hidden lg:pt-[26px] lg:pb-[454px] lg:box-border mq750:pt-5 mq750:pb-[295px] mq750:box-border mq450:gap-[34px_0px]">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5">
        <div
          className="flex-1 flex flex-row items-start justify-start gap-[0px_13px] cursor-pointer"
          onClick={onLinkContainerClick}
        >
          <img
            className="h-10 w-10 relative rounded-481xl object-cover"
            loading="lazy"
            alt=""
            src="/divframer74z9g2@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[2px_0px]">
            <a
              className="relative leading-[20px] text-[inherit] [text-decoration:none]"
              href="https://navy-labeling-415471.framer.app/"
              target="_blank"
            >
              Steve Baka
            </a>
            <div className="relative leading-[20px] text-navy-labeling-415471-framer-app-2002x1208-default-rolling-stone">
              Coach
            </div>
          </div>
        </div>
      </div>
      <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[2px_0px] text-left text-sm text-navy-labeling-415471-framer-app-2002x1208-default-nero font-navy-labeling-415471-framer-app-2002x1208-default-inter-regular-1488">
        <div
          className="self-stretch rounded-md bg-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft2 shadow-[0px_0.3px_0.3px_-0.75px_rgba(0,_0,_0,_0.04),_0px_1.1px_1.15px_-1.5px_rgba(0,_0,_0,_0.04),_0px_5px_5px_-2.25px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-end justify-start pt-[9px] px-3 pb-2.5 gap-[0px_9px] top-[0] z-[99] sticky cursor-pointer border-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft3"
          onClick={onLinkContainer2Click}
        >
          <img className="h-4 w-4 relative" alt="" src="/reminder-frame.svg" />
          <input
            className="w-9 [border:none] [outline:none] font-navy-labeling-415471-framer-app-2002x1208-default-inter-regular-1488 text-sm bg-[transparent] h-[17px] relative leading-[20px] text-navy-labeling-415471-framer-app-2002x1208-default-nero text-left flex items-center"
            placeholder="Home"
            type="text"
          />
          <div className="h-9 w-52 relative rounded-md box-border hidden border-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft3" />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer"
          onClick={onLinkContainer1Click}
        >
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/divframeri61089-1.svg"
          />
          <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
            <div className="flex flex-col items-start justify-start">
              <a
                className="relative leading-[20px] text-[inherit] [text-decoration:none] whitespace-nowrap"
                href="https://navy-labeling-415471.framer.app/projects"
                target="_blank"
              >
                Projekte
              </a>
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer"
          onClick={onLinkContainer22Click}
        >
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/divframeri61089-2.svg"
          />
          <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
            <a
              className="relative leading-[20px] text-[inherit] [text-decoration:none]"
              href="https://navy-labeling-415471.framer.app/journal"
              target="_blank"
            >
              Journal
            </a>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer"
          onClick={onLinkContainer3Click}
        >
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/divframeri61089-3.svg"
          />
          <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
            <div className="flex flex-col items-start justify-start">
              <a
                className="relative leading-[20px] text-[inherit] [text-decoration:none] whitespace-nowrap"
                href="https://navy-labeling-415471.framer.app/stack"
                target="_blank"
              >
                Stack
              </a>
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer"
          onClick={onLinkContainer4Click}
        >
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/divframeri61089-4.svg"
          />
          <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
            <a
              className="relative leading-[20px] text-[inherit] [text-decoration:none]"
              href="https://navy-labeling-415471.framer.app/about"
              target="_blank"
            >
              Über mich
            </a>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer"
          onClick={onLinkContainer5Click}
        >
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/divframeri61089-5.svg"
          />
          <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
            <a
              className="relative leading-[20px] text-[inherit] [text-decoration:none] whitespace-nowrap"
              href="https://navy-labeling-415471.framer.app/kontakt"
              target="_blank"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px] text-3xs text-navy-labeling-415471-framer-app-2002x1208-default-rolling-stone">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px_0px]">
          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
            <div className="relative tracking-[0.6px] leading-[12px] uppercase font-medium">
              Follow
            </div>
          </div>
          <div
            className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-3 gap-[0px_9px] cursor-pointer text-sm text-navy-labeling-415471-framer-app-2002x1208-default-nero"
            onClick={onLinkContainer6Click}
          >
            <img
              className="h-4 w-4 relative"
              alt=""
              src="/divframeri61089-6.svg"
            />
            <div className="flex flex-row items-center justify-center pt-px px-0 pb-0.5 opacity-[0.56]">
              <a
                className="relative leading-[20px] text-[inherit] [text-decoration:none] whitespace-nowrap"
                href="https://instagram.com/baka.steve"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-navy-labeling-415471-framer-app-2002x1208-default-cod-gray flex flex-row items-end justify-start pt-[9px] px-3 pb-2.5 gap-[0px_9px] z-[1] border-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft">
          <img className="h-4 w-4 relative" alt="" src="/searchtextframe.svg" />
          <input
            className="w-[43px] [border:none] [outline:none] font-navy-labeling-415471-framer-app-2002x1208-default-inter-regular-1488 text-sm bg-[transparent] h-[17px] relative leading-[20px] text-navy-labeling-415471-framer-app-2002x1208-default-rolling-stone text-left flex items-center"
            placeholder="Search"
            type="text"
          />
          <div className="h-9 w-52 relative rounded-md box-border hidden border-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft" />
        </div>
      </div>
      <div className="w-64 h-[1208px] relative box-border hidden border-r-[1px] border-solid border-navy-labeling-415471-framer-app-2002x1208-default-mine-shaft" />
    </div>
  );
};

export default Nav;
