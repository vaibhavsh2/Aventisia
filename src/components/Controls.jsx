import { Icon } from './Icon';

export function SearchField({ placeholder = 'Search...' }) {
  return (
    <label className="flex min-w-[180px] items-center gap-2 rounded-[10px] border border-border bg-white px-3 py-2">
      <Icon name="search" className="h-3.5 w-3.5 shrink-0 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-300"
      />
    </label>
  );
}

export function PrimaryButton({ children, icon, onClick, className = '' }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-button transition hover:bg-indigo-600 ${className}`.trim()}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" /> : null}
      <span>{children}</span>
    </button>
  );
}
