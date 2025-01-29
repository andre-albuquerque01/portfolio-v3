import { CONTACT } from '@/app/constants'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { MdOutlineEmail } from 'react-icons/md'
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Contato</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 w-full">
        <p className="flex items-center gap-2">
          <GiPositionMarker className="w-6 h-6" /> {CONTACT.address}
        </p>
        <Link
          href={`mailto:${CONTACT.email}?subject=Dúvidas sobre o serviços`}
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 hover:border-b"
        >
          <MdOutlineEmail className="w-6 h-6" /> E-mail
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5561985261944&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20como%20funciona%20o%20servi%C3%A7o%20de%20desenvolvimento%20de%20sistemas!%20%F0%9F%90%BE%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?"
          target="_blank"
          className="flex items-center gap-2 p-2 hover:border-b"
        >
          <FaWhatsapp className="w-6 h-6" />
          WhatsApp
        </Link>
      </motion.div>
    </div>
  );
};
