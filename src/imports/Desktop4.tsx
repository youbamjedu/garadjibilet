import svgPaths from "./svg-gj9fnrxe2f";
import imgImage2 from "figma:asset/e714369d34913d6878acda127c17ba8f91295b01.png";

function Frame() {
  return (
    <div className="absolute bottom-[832px] content-stretch flex h-[104px] items-center justify-between px-[32px] py-[12px] right-[216px] rounded-[24px] w-[1010px]">
      <div aria-hidden="true" className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.1)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-center text-shadow-[-0.5px_-0.5px_0px_rgba(0,0,0,0.05),10px_10px_21.213px_rgba(0,0,0,0.05),5.901px_5.901px_8.345px_rgba(0,0,0,0.19),2.658px_2.658px_3.759px_rgba(0,0,0,0.23),1.211px_1.211px_1.712px_rgba(0,0,0,0.25),0.445px_0.445px_0.629px_rgba(0,0,0,0.26)] text-white whitespace-nowrap">
        <p className="leading-[100.19999694824219%]" dir="auto">{` لماذا بقي المشروع "حلماً" لعقود؟`}</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_3px_0.5px_0px_rgba(255,255,255,0.5),inset_2px_2px_1px_0px_#666,inset_-2px_-2px_1px_0px_#666,inset_0px_0px_0px_0px_#a6a6a6,inset_0px_0px_22px_0px_#f2f2f2]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[34px] size-[91px] top-[21px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
        <g id="Group 2">
          <g id="Group 1">
            <path d="M36.5659 22L21.5659 66.5" id="Line 3" stroke="var(--stroke-0, white)" strokeWidth="10" />
            <path d={svgPaths.p38dccc70} fill="var(--stroke-0, white)" id="Line 7" />
            <line id="Line 4" stroke="var(--stroke-0, white)" strokeWidth="10" x1="12.1346" x2="29.1346" y1="24.1884" y2="49.1884" />
            <path d={svgPaths.p3043e600} fill="var(--stroke-0, white)" id="Line 6" />
            <path d={svgPaths.p13c7c800} id="Line 5" stroke="var(--stroke-0, white)" strokeWidth="10" />
          </g>
          <circle cx="45.5" cy="45.5" id="Ellipse 2" r="44.5" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[34px] top-[21px]">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[145px] left-[85px] top-[1049px] w-[53px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 145">
        <g id="Group 5">
          <rect height="89" id="Rectangle 1" rx="25" stroke="var(--stroke-0, #543D29)" strokeWidth="3" width="50" x="1.5" y="1.5" />
          <line id="Line 1" stroke="var(--stroke-0, #543D29)" strokeWidth="3" x1="26.5" x2="26.5" y1="2" y2="31" />
          <line id="Line 2" stroke="var(--stroke-0, #543D29)" strokeWidth="2" x1="27" x2="27" y1="98" y2="145" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[34px] top-[894px]">
      <div className="absolute bg-gradient-to-b border border-[#543d29] border-solid from-[#422d16] h-[40px] left-[34px] rounded-[10px] to-[#c19763] to-[91.406%] top-[894px] w-[180px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold h-[38px] justify-center leading-[0] left-[122.5px] not-italic text-[16px] text-center text-white top-[915px] w-[159px]">
        <p className="leading-[normal] whitespace-pre-wrap" dir="auto">{`لنواصل  الرحلة`}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[34px] top-[894px]">
      <Group3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[55px] items-center justify-center left-[111.5px] top-[991.5px] w-[25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] not-italic relative text-[12px] text-center text-white w-[55px]">
            <p className="leading-[normal]">SCROLL</p>
          </div>
        </div>
      </div>
      <Group2 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white border-0 border-black border-solid relative size-full" data-name="Desktop - 4">
      <div className="absolute h-[1230px] left-[-595px] top-[-188px] w-[2520px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame />
      <Group1 />
      <Group4 />
      <div className="absolute h-[1493px] left-[28px] top-[-18px] w-[1636px]" data-name="vectorink-upscaled-image 1" />
    </div>
  );
}