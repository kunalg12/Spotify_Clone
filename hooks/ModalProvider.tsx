"use client"

import Modal from '@/components/Modal';
import React, { useEffect, useState } from 'react'

function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

    },[])

    if(!isMounted){
        return null;
    }
  return (
    <>
    <Modal/>
    </>
  )
}

export default ModalProvider