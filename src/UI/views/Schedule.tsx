export function Schedule() {
  const gameDates = [
    "11 febrer",
    "10 març",
    "20 abril",
    "16 juny",
    "11 febrer",
    "10 març",
    "20 abril",
    "16 juny",
    "20 abril",
    "16 juny",
  ];

  return (
    <>
      <div className="p-20 bg-indigo-900">
        <h2 className="font-bold text-center text-2xl text-white italic ">
          Season 2 schedule is awesome
        </h2>
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="flex flex-col justify-center w-full items-center">
          {gameDates.map((g) => (
            <div className="grid gap-4 grid-cols-schedule justify-center items-center rounded-lg h-20 w-4/5  m-4 text-2xl text-white bg-slate-800">
              <span className="p-1 text-center border-r">1st</span>
              <span className="p-1">{g}</span>
              <span className="p-1">{"21:30"}</span>
              <span className="p-1">Winner:</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
