/* eslint-disable @typescript-eslint/no-unused-vars */
import tw from "twin.macro";

export const BrightApp = tw.div`container min-h-screen`;
export const Header = tw.header`p-0 m-0 border-0`;
export const MainContent = tw.main`p-0 m-0`;

export const DatePickerStyles = tw.section`row`;
export const LessThanSign = tw.div`col-2 text-black font-bold relative top-2`;
export const Row = tw.div`row pt-3`;
export const GreaterThanSign = tw.div`col-2 text-gray-300 font-bold relative top-2 right-12`;

export const ChartStyles = tw.section`mx-auto relative right-4`;

export const EnergyNumberStyles = tw.section`row text-center border mx-1 py-4`;
export const September = tw.div`col-7 relative right-10`;
export const August = tw.div`col-5 relative right-[4.5rem]`;
export const SeptNumber = tw.p`border-r-2 font-sixta font-extrabold text-blue-dark tracking-tighter -ml-7`;
export const AugNumber = tw.p`font-sixta font-extrabold text-blue-dark tracking-tighter -ml-7`;
export const SeptDate = tw.p`text-xs text-slate-500 font-br -mt-1 -ml-1 font-light`;
export const AugDate = tw.p`text-xs text-slate-500 font-br -mt-1 font-light`;
export const WattHours = tw.span`pl-[1px] font-normal text-xs text-blue-light`;

export const FooterContainer = tw.footer`bg-blue-dark py-4 row text-center`;
export const FooterText = tw.p`text-white font-sans -ml-7 p-0`;

export const FSRow = tw.section`row p-4`;
export const LeftColumn = tw.div`col-6 font-bold text-gray-400`;
export const RightColumn = tw.div`col-6 relative left-[8rem]`;
export const Figure = tw.figure``;
export const Image = tw.img``;

export const LogoRowStyles = tw.section`row bg-blue pt-4 border-0`;
export const LogoColumn = tw.div`col-10`;
export const IconColumn = tw.div`col-1 p-0 m-0`;

export const NavMenuStyles = tw.nav`border-0`;
export const NavList = tw.ul`bg-blue row py-8`;
export const NavLink = tw.li`relative left-4 col p-0 m-0 inline text-xs font-sans text-white`;
export const CurrentNavLink = tw.li`relative bottom-1 left-0 col py-1 m-0 inline text-xs font-sans text-white text-center rounded-2xl bg-blue-dark`;

export const SunCircleStyles = tw.div`row py-4`;
export const SCFigure = tw.figure`max-w-lg`;
export const SCImage = tw.img`w-1/2`;
export const Title = tw.h2`relative right-12 font-sixta font-medium text-slate-700`;
export const Update = tw.p`relative right-12 text-xs text-slate-500 font-br`;
export const SunCircleColumn = tw.div`col-3`;
export const TextColumn = tw.div`col-9`;

export const Month = tw.span`mt-8 text-xs font-br text-gray-500 mt-8 text-xs font-br text-gray-500`;
export const TogglesSection = tw.div`row text-center pb-4 -ml-12`;
export const SeptLabel = tw.label`relative inline-flex cursor-pointer`;
export const SeptColumn = tw.div`col-6`;
export const SeptToggle =
  "-ml-16 w-11 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:bg-blue-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-7px] after:left-6 after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all border-gray-600";
export const AugLabel = tw.label`relative inline-flex cursor-pointer right-4`;
export const AugColumn = tw.div`col-6 relative right-10`;
export const AugToggle =
  "relative right-14 w-11 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:bg-blue-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-6px] after:left-6 after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all border-gray-600";
export const Input = tw.input``;
export const SrOnlyPeer = "sr-only peer";


