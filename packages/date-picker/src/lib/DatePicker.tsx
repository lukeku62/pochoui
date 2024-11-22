import { useRef } from "react";

export const DatePicker = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    } else {
      dialogRef.current?.show();
    }
  };

  return (
    <>
      <button onClick={toggleDialog}>Toggle Dialog</button>
      <dialog
        ref={dialogRef}
        className="m-0 p-4 rounded-lg shadow-lg border border-gray-200 absolute backdrop:hidden"
      >
        <form method="dialog" className="container">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}

export default DatePicker;
