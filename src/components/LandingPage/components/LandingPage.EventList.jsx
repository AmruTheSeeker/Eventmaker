import { Card } from "@/components/SharedUI/Card";

export const EventList = () => {
  return (
    <div className="max-w-[1300px] mt-5 m-auto">
      <div className="flex justify-evenly items-baseline gap-2 border-b-2 w-[350px] mb-5">
        <h1 className="text-[28px] font-bold">Events Near</h1>
        <h1 className="flex items-center text-[25px] text-slate-200 bg-[rgb(99,163,178)] rounded-lg p-2">
          Location{" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3 hover:cursor-pointer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};