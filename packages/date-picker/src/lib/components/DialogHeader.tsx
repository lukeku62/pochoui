interface DialogHeaderProps {
  children: React.ReactNode;
  onClose: () => void;
  mainColor: string;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children, onClose, mainColor }) => (
  <div className="flex justify-between items-center">
    {children}
    <button 
      type="button" 
      className="p-1 hover:bg-gray-100 rounded-full" 
      onClick={onClose}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill={mainColor}
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  </div>
);
