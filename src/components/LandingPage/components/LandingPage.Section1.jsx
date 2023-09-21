import Link from "next/link";

export const Section1 = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="max-w-3xl pt-12">
        <h1 className="text-[42px] font-semibold">Where Every Day is an Event: Elevate Your Experience</h1>
        <p className="pt-2 text-slate-700 tracking-tight">Elevate Your Event Experience, Explore, Engage, and Enjoy Local Events with Unparalleled Ease and Enthusiasm</p>
        <div className="flex justify-center gap-5">
          <Link className="bg-[rgb(99,163,178)] text-white rounded-full p-3 mt-3 hover:bg-cyan-500/80" href={""}>
            Join Event
          </Link>
          <Link className="bg-[rgb(99,163,178)] text-white rounded-full p-3 mt-3 hover:bg-cyan-500/80" href={""}>
            Create Event
          </Link>
        </div>
      </div>
    </div>
  );
};
