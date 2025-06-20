// import TodoBox from "@/components/todo-box";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[330px] -z-10">
        <div className="absolute bg-gradient-to-r from-[#AC2DEB] to-[#5596FF] h-[330px] w-full" />
        <img
          src="/bg.png"
          alt="mountain"
          className="w-full h-[330px] object-cover object-top opacity-15"
        />
      </div>

      <main className="relative z-10">
        <div className="w-[540px] h-[48px] flex justify-between items-center mx-auto mt-[70px] ">
          <h1 className="text-white text-[40px] font-bold tracking-[20px]">
            TODO
          </h1>
          <img src="/bulan.svg" alt="moon" />
        </div>
        <div className="w-[540px] h-[64px] flex items-center mx-auto mt-[40px] bg-white p-3 rounded-[5px]">
          <p className="text-[#9495A5]">text</p>
        </div>
        <div className="w-[540px] h-auto mx-auto mt-[24px] bg-white gap-2 rounded-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <p className=" px-[24px] py-[20px] border-b-2 border-[#E3E4F1] font-[#494C6B]">
            text
          </p>
          <p className=" px-[24px] py-[20px] border-b-2 border-[#E3E4F1] font-[#494C6B]">
            text
          </p>
          <p className=" px-[24px] py-[20px] border-b-2 border-[#E3E4F1] font-[#494C6B]">
            text
          </p>
          <p className=" px-[24px] py-[20px] border-b-2 border-[#E3E4F1] font-[#494C6B]">
            text
          </p>
          <p className=" px-[24px] py-[20px] border-b-2 border-[#E3E4F1] font-[#494C6B]">
            text
          </p>
          <div className="w-full flex items-center justify-between px-[24px] pt-[16px] pb-[20px] rounded-b-[5px] text-[#9495A5]">
            <p>5 items left</p>
            <div className="flex gap-4 font-[#9495A5]">
              <button className="active:text-[#3A7CFD]">All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button>Clear completed</button>
          </div>
        </div>
        <div className="text-[#9495A5] mt-12 text-center font[14px]">
          Drag and drop to reorder list
        </div>
      </main>
      {/* <TodoBox /> */}
    </>
  );
}
