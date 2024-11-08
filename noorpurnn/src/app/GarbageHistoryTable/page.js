import GarbageHistoryTable from "./GarbageHistoryTable";
export default function page() {
  return (
    <div>
      <h1 className="px-5 py-3 flex justify-center border-b-2 border-gray-200 border-2 bg-primary text-left text-2xl font-semibold text-white uppercase tracking-wider">Garbage Collection History</h1>
      <GarbageHistoryTable/>
    
    </div>
  );
}
