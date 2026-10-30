export default function Spinner({ label = "Loading..." }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-20 text-[#737373]">
      <span className="inline-block w-10 h-10 border-4 border-[#E6E6E6] border-t-[#23A6F0] rounded-full animate-spin" aria-hidden="true" />
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}
