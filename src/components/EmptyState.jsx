import { Icon } from './Icon';

export function EmptyState() {
  return (
    <div className="grid justify-items-center gap-3 text-center text-soft">
      <div className="grid h-[74px] w-[74px] place-items-center rounded-[20px] border-[3px] border-slate-300">
        <Icon name="file" className="h-8 w-8" />
      </div>
      <p className="text-sm font-medium">No Knowledge Bases Found</p>
    </div>
  );
}
