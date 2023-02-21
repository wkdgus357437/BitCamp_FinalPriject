import React, { useState } from 'react';
import StoreAdminModal from './StoreAdminModal';
import StoreUpdate from './StoreUpdate';


// 게시글 수정하기 .. AdminBoardUpdate.js 
function StoreAdminBoardModalUpdatePage(props){
  const [modalOpen, setModalOpen] = useState(false);

  const [adSt, setAdSt] = useState([])

  const openModal = (e) => {
    // const seq = e.target.parentNode.id
    // const seq = e.target.parentNode.id
    const seq = e.target.parentNode.id
    console.log(seq)
    setAdSt(seq)
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
    <button style={{ all:'unset',color:'blue',fontSize:12}} onClick={openModal}>수정</button>
    <StoreAdminModal open={modalOpen} close={closeModal} header="상품 수정">
   <StoreUpdate props={adSt}/>
    </StoreAdminModal > 
  </>
  );
};

export default StoreAdminBoardModalUpdatePage;