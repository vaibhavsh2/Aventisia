import { Icon } from './Icon';

export function KnowledgeCard({ item }) {
  return (
    <article className="flex min-h-[172px] flex-col rounded-[14px] border border-border bg-white p-3.5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="m-0 text-base font-bold text-slate-800">{item.title}</h3>
        <span className="grid h-8 w-8 place-items-center rounded-lg text-slate-400">
          <Icon name="dots" className="h-3.5 w-3.5" />
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-6 text-muted">{item.description}</p>

      <footer className="mt-auto border-t border-slate-100 pt-4 text-[12px] font-semibold text-slate-400">
        <span>Created On: {item.createdAt}</span>
      </footer>
    </article>
  );
}
