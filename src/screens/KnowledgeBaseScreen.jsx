import { Icon } from '../components/Icon';
import { SearchField, PrimaryButton } from '../components/Controls';
import { KnowledgeCard } from '../components/KnowledgeCard';
import { PaginationFooter } from '../components/PaginationFooter';

export function KnowledgeBaseScreen({ items, faded, onCreateNew }) {
  return (
    <div
      className={`flex flex-col bg-[#F8FAFC] transition-opacity duration-300 ${
        faded ? 'pointer-events-none opacity-40' : 'opacity-100'
      }`}
    >
      <header className="flex flex-col gap-6 border-b border-border bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Knowledge Base</h1>
            <span className="flex h-6 items-center rounded-full bg-indigo-50 px-2.5 text-[11px] font-extrabold uppercase tracking-wider text-primary">
              Beta
            </span>
          </div>

          <PrimaryButton icon="plus" onClick={onCreateNew}>
            Create New
          </PrimaryButton>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <SearchField placeholder="Search knowledge base..." />
            
            <div className="flex items-center gap-2 rounded-[10px] border border-border bg-white px-3 py-2 text-sm font-bold text-slate-500">
              <span>Sort by:</span>
              <button type="button" className="inline-flex items-center gap-1 text-slate-700">
                Newly Created
                <Icon name="chevronDown" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="text-sm font-bold text-slate-400">
            Total {items.length} items
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <KnowledgeCard key={item.id} item={item} />
          ))}
        </div>

        <PaginationFooter totalRows={items.length} />
      </div>
    </div>
  );
}
