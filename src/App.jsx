import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { SlideOver } from './components/SlideOver';
import { TopBar } from './components/TopBar';
import { knowledgeBaseItems, menuSections } from './data';
import { KnowledgeBaseScreen } from './screens/KnowledgeBaseScreen';

export default function App() {
  const [isCreatePanelOpen, setIsCreatePanelOpen] = useState(false);
  const [items] = useState(knowledgeBaseItems);

  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      <TopBar />

      <div className="grid flex-1 md:grid-cols-[232px_1fr]">
        <Sidebar sections={menuSections} />

        <KnowledgeBaseScreen
          items={items}
          faded={isCreatePanelOpen}
          onCreateNew={() => setIsCreatePanelOpen(true)}
        />
      </div>

      <SlideOver open={isCreatePanelOpen} onClose={() => setIsCreatePanelOpen(false)} />
    </main>
  );
}
