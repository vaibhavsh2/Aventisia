import { PrimaryButton } from './Controls';
import { FormField, SelectField } from './FormFields';
import { Icon } from './Icon';

export function SlideOver({ open, onClose }) {
  return (
    <div className={`absolute inset-0 z-30 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/30 transition ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-[18px] py-4">
          <div>
            <h2 className="m-0 text-lg font-extrabold text-slate-800">Create New Knowledge Base</h2>
            <p className="mt-1 text-xs leading-5 text-muted">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <button type="button" className="grid h-8 w-8 place-items-center rounded-lg text-slate-400" onClick={onClose}>
            <Icon name="close" className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid content-start gap-4 px-[18px] py-4">
          <FormField
            label={
              <>
                Name <span className="font-medium text-slate-400">[Cannot be edited later]</span>{' '}
                <span className="text-red-500">*</span>
              </>
            }
            placeholder="Name"
          />
          <FormField label="Description" placeholder="Description" type="textarea" />
          <SelectField
            label={
              <>
                Vector Store <span className="text-red-500">*</span>
              </>
            }
            value="Qdrant"
          />
          <SelectField
            label={
              <>
                LLM Embedding Model <span className="text-red-500">*</span>
              </>
            }
            value="text-embedding-ada-002"
          />
        </div>

        <div className="mt-auto flex justify-end border-t border-border px-[18px] py-4">
          <PrimaryButton>Create</PrimaryButton>
        </div>
      </aside>
    </div>
  );
}
