type FoldersListProps = {
  folders: number[];
  onFolderChange: (id: number | 'all') => void;
  selectedFolder: number | 'all';
};

export function FoldersList({
  folders,
  selectedFolder,
  onFolderChange,
}: FoldersListProps) {
  return (
    <div className="overflow-auto scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin">
      <ul>
        {folders.length !== 0 && (
          <li>
            <button
              type="button"
              className={`w-full flex items-center h-12 pl-16 text-purple-900 text-xl ${
                selectedFolder === 'all'
                  ? 'before:bg-orange-600 relative before:w-4 before:h-12 before:absolute before:left-0'
                  : ''
              }`}
              onClick={() => onFolderChange('all')}
            >
              Todas
            </button>
          </li>
        )}

        {folders.map((folder) => (
          <li key={folder}>
            <button
              type="button"
              className={`w-full flex items-center h-12 pl-16 text-purple-900 text-xl ${
                selectedFolder === folder
                  ? 'before:bg-orange-600 relative before:w-4 before:h-12 before:absolute before:-z-10 before:left-0 pointer-events-none'
                  : ''
              }`}
              onClick={() => onFolderChange(folder)}
            >
              Nome_Pasta {folder + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
