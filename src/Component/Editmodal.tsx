import React, { useEffect, useState } from 'react';

interface ModalEdit {
  openedit: boolean;
  closeedit: () => void;
  confirmedit: (edited: string) => void;
  index: number;
  reason: string;
  editlanguage: string;
}

const Editmodal: React.FC<ModalEdit> = ({ openedit, closeedit, confirmedit, index, reason,editlanguage }) => {
  const [edit, setedited] = useState("")
useEffect(()=>{
  setedited(reason)
},[reason,closeedit])
  if (!openedit) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal container */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
            <div className="sm:flex sm:items-start">
              {/* Modal content */}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h1 className='text-xl  mb-4'>Edit why <b>{editlanguage}</b> is your fav:</h1>
                <textarea rows={3}   value={edit} onChange={(e) => setedited(e.target.value)} className="text-xl text-gray-500 w-full border border-solid border-gray-500 rounded focus:outline-none p-2 resize-none" id="modal-headline" />

                {/*  modal content  */}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => confirmedit(edit)}
            >
              Edit
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeedit}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;
