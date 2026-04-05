import { Icon } from './Icon';

export function Sidebar({ sections }) {
  return (
    <aside className="border-b border-border bg-white/95 px-3.5 py-5 md:border-b-0">
      {sections.map((section) => (
        <div key={section.title} className="[&+&]:mt-4">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-slate-400">
            {section.title}
          </p>

          <nav className="grid gap-1">
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm ${
                  item.active
                    ? 'relative overflow-hidden bg-indigo-50 font-bold text-primary before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary before:content-[""]'
                    : 'text-slate-500'
                }`}
              >
                <Icon name={item.icon} className="h-[14px] w-[14px]" />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
