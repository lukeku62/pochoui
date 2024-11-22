import { useRef } from 'react';

export const useDialogManagement = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    } else {
      dialogRef.current?.show();
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return {
    dialogRef,
    toggleDialog,
    closeDialog,
  };
};