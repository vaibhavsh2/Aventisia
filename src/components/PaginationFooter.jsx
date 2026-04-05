import { Icon } from './Icon';

function PagerButton({ direction }) {
  const iconName =
    direction === 'leftEnd' ? 'arrowLeftEnd' :
    direction === 'left' ? 'arrowLeft' :
    direction === 'right' ? 'arrowRight' :
    'arrowRightEnd';

  return (
    <button type="button" className="grid h-[34px] w-[34px] place-items-center rounded-[10px] border border-border bg-white">
      <Icon name={iconName} className="h-3.5 w-3.5" />
    </button>
  );
}

export function PaginationFooter({ totalRows }) {
  return (
    <footer className="mt-auto flex flex-col gap-4 px-2 pb-2 pt-5 text-sm font-bold text-slate-500 md:flex-row md:items-center md:justify-between">
      <span>{totalRows} rows</span>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
        <div className="flex items-center gap-3">
          <span>Rows per page</span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-white px-3 py-2 text-sm font-medium text-slate-500"
          >
            10
            <Icon name="chevronDown" className="h-3.5 w-3.5" />
          </button>
        </div>

        <span>page 1 of 1</span>

        <div className="flex items-center gap-3">
          <PagerButton direction="leftEnd" />
          <PagerButton direction="left" />
          <PagerButton direction="right" />
          <PagerButton direction="rightEnd" />
        </div>
      </div>
    </footer>
  );
}
