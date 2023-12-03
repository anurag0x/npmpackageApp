// Package.tsx
import React, { useEffect, useState } from 'react';
import eye from "./eye.png";
import del from "./del.png";
import edit from "./edit.png";
import Modal from './Modal';
import DelModal from './Modalfordel';
import Editmodal from './Editmodal';
interface Packageprop {
  counter: () => void;
}
const Package: React.FC<Packageprop> = ({ counter }) => {
  const favorites = JSON.parse(localStorage.getItem('packages') || '[]');
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number | null>(null);
  const [delt, setDelIndex] = useState<number | null>(null);
  const [reason, setReason] = useState<string>("");
  const [language, setlanguage] = useState<string>("")
  const [editlanguage, seteditlanguage] = useState<string>("")
  const [editindex, setEditIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    const selectedPackage = favorites.find((el: any, i: number) => i === index);
    if (selectedPackage) {
      setReason(selectedPackage.reason);
      setlanguage(selectedPackage.name)
    }
    setSelectedPackageIndex(index);
  };

  const opendel = (index: number) => {
    setDelIndex(index);
  };

  const openedit = (index: number) => {
    const selectedPackage = favorites.find((el: any, i: number) => i === index);
    if (selectedPackage) {
      setReason(selectedPackage.reason);
      seteditlanguage(selectedPackage.name)
    }
    setEditIndex(index);
    console.log(editindex)
  };

  const closeModal = () => {
    setSelectedPackageIndex(null);
    setReason("");
  };

  const closedel = () => {
    setDelIndex(null);
  };

  const closeedit = () => {
    setEditIndex(null);
  };

  const ondel = () => {
    const newdata = favorites.filter((el: any, i: number) => i !== delt);
    localStorage.setItem("packages", JSON.stringify(newdata));
    closedel();
    counter()
  };

  const cofirmedit = (edit: string) => {
    // Update the reason in local storage
    const newdata = favorites.map((el: any, i: number) =>
      i === editindex ? { ...el, reason: edit } : el
    );
    console.log(editindex)
    localStorage.setItem("packages", JSON.stringify(newdata));
    setReason("")
    closeedit();
  };
  useEffect(() => {

  }, [favorites.length])
  return (
    <div className=' w-full '>
      {
        favorites.length ? <div className='flex w-full   '>
          <div className=' text-2xl font-bold w-8/12 border-b-2 p-2'><h1>Package Name</h1></div>
          <div className='text-2xl font-bold w-4/12 border-b-2 border-s-2 p-2 '>Actions</div>
        </div> : null
      }

      {favorites.length !== 0 && favorites.map((el: any, i: number) => (
        <div key={i} className='flex items-center w-full border-b-2 rounded-md'>
          <div className='w-8/12  p-2 ' ><p className='text-xl'>{el.name}</p></div>
          <div className='flex gap-9 w-4/12  p-2 border-s-2'>
            <img
              className='w-5 h-5 cursor-pointer'
              onClick={() => openModal(i)}
              src={eye}
              alt=""
            />
            <img className='w-5 h-5 cursor-pointer' onClick={() => openedit(i)} src={edit} alt="" />
            <img className='w-5 h-5 cursor-pointer' onClick={() => opendel(i)} src={del} alt="" />
          </div>
        </div>
      ))}


      <Modal
        isOpen={selectedPackageIndex !== null}
        onClose={closeModal}
        onConfirm={closeModal}
        index={selectedPackageIndex || 0}
        reason={reason}
        language={language}
      />
      <DelModal
        opendel={delt !== null}
        closedel={closedel}
        ondel={ondel}
        index={delt || 0}
      />
      <Editmodal
        openedit={editindex !== null}
        closeedit={closeedit}
        confirmedit={cofirmedit}
        index={editindex || 0}
        reason={reason}
        editlanguage={editlanguage}
      />
    </div>
  );
};

export default Package;


