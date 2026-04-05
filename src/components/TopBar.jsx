import { Icon } from './Icon';

export function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-secondary px-4 py-3 text-white">
      <div className="flex items-center gap-2.5">
        <div className="grid h-[18px] w-[18px] place-items-center">
          <span className="h-[14px] w-[14px] rotate-[35deg] rounded-[5px] border-[3px] border-[#6452ff] border-t-transparent" />
        </div>

        <span className="font-bold">Worqspace</span>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-[12px] text-indigo-100"
        >
          Workspace 1
          <Icon name="chevronDown" className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-[10px] border border-white/10 bg-white/10 px-3 py-2 md:max-w-[390px]">
        <Icon name="search" className="h-3.5 w-3.5 shrink-0 text-white/60" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
        />
        <span className="text-[11px] text-white/55">⌘K</span>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" className="grid h-[34px] w-[34px] place-items-center rounded-[10px] text-white/85">
          <Icon name="bell" className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[12px] font-extrabold text-secondary"
        >
          OR
        </button>
      </div>
    </header>
  );
}
