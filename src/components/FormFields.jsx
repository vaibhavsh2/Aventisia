import { Icon } from './Icon';

export function FormField({ label, placeholder, type = 'text' }) {
  const commonClassName =
    'rounded-[10px] border border-border bg-white px-3.5 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-300';

  return (
    <label className="grid gap-2">
      <span className="text-[13px] font-extrabold text-slate-700">{label}</span>
      {type === 'textarea' ? (
        <textarea rows="4" placeholder={placeholder} className={`${commonClassName} min-h-[104px] resize-y`} />
      ) : (
        <input type={type} placeholder={placeholder} className={commonClassName} />
      )}
    </label>
  );
}

export function SelectField({ label, value }) {
  return (
    <label className="grid gap-2">
      <span className="text-[13px] font-extrabold text-slate-700">{label}</span>
      <button
        type="button"
        className="inline-flex items-center justify-between rounded-[10px] border border-border bg-white px-3.5 py-3 text-sm text-slate-500"
      >
        <span>{value}</span>
        <Icon name="chevronDown" className="h-3.5 w-3.5" />
      </button>
    </label>
  );
}
