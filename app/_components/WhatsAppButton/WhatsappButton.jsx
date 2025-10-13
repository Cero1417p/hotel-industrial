'use client';

import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { AnimatePresence, motion } from 'framer-motion';

export default function WhatsAppButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            setShowButton(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}
                >
                    <FloatingWhatsApp
                        phoneNumber="+51987131053"
                        accountName="Hostal Industrial"
                        chatMessage="Hola 👋 ¿Quieres reservar una habitación?"
                        avatar='/icon.png'
                        notification
                        notificationSound
                        placeholder='Escriba una respuesta...'
                        statusMessage="Responde en menos de 1 hora"
                        onClick={() => console.log("click whatsapp chat")}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}