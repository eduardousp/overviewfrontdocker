import { FoldersList } from '@pages/creatives/components/FoldersList';

type FolderSidebarProps = {
  folders: number[];
  onFolderChange: (id: number | 'all') => void;
  selectedFolder: number | 'all';
};

export function FolderSidebar({
  folders,
  onFolderChange,
  selectedFolder,
}: FolderSidebarProps) {
  return (
    <aside className="min-w-[320px] w-80 flex flex-col shadow-md">
      <header className="flex justify-between py-8 pl-12 pr-6 bg-gray-50">
        <h3 className="text-purple-900 text-2xl font-medium">Pastas</h3>
        <button
          type="button"
          className="text-orange-600 text-base font-medium hover:opacity-70 transition-opacity"
        >
          +Nova Pasta
        </button>
      </header>

      <FoldersList
        folders={folders}
        onFolderChange={onFolderChange}
        selectedFolder={selectedFolder}
      />
    </aside>
  );
}
