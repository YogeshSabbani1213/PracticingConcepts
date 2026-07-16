import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState<number>(1000000000);
  const [counter, setCounter] = useState<number>(0);

  // let total = 0;

  // for (let i = 1; i <= number; i++) {
  //   total += i;
  // }


  const total = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }, [number])



  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          useMemo Demo
        </h1>

        <div className="mb-6 rounded-lg bg-slate-700 p-4">
          <p className="text-sm text-slate-300">Calculated Sum</p>
          <h2 className="mt-2 text-2xl font-semibold text-green-400">
            {total}
          </h2>
        </div>

        <div className="mb-6 rounded-lg bg-slate-700 p-4">
          <p className="text-sm text-slate-300">Counter</p>
          <h2 className="mt-2 text-2xl font-semibold text-blue-400">
            {counter}
          </h2>
        </div>

        <button
          onClick={() => setCounter(counter + 1)}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
}

export default UseMemo;