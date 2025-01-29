import { BiLogoPostgresql } from 'react-icons/bi'
import { FaDocker, FaFigma, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa'
import { FcLinux } from 'react-icons/fc'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiFastify, SiPostman, SiSwagger, SiTypescript } from 'react-icons/si'
import { TbBrandMysql, TbBrandNextjs, TbFileTypeSql } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { motion } from "framer-motion"

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse' as const,
        },
    },
});


export const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Tecnologias</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' title='React' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className='text-7xl' title='Next.Js - framework' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className='text-7xl text-cyan-600' title='Tailwind' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className='text-7xl text-blue-600' title='Typescript' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-500' title='Node' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFastify className='text-7xl' title='Fastify - framework' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className='text-7xl text-blue-800' title='PHP' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className='text-7xl text-red-400' title='Laravel - framework' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandMysql className='text-7xl text-blue-400' title='Mysql' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className='text-7xl text-sky-700' title='PostgresSql' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbFileTypeSql className='text-7xl text-blue-800' title='SQL' />
                </motion.div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}>
                <h2 className='my-20 text-center text-3xl'>Ferramentas</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FcLinux className='text-7xl text-blue-600' title='Linux' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaDocker className='text-7xl text-blue-600' title='Docker' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiSwagger className='text-7xl text-green-400' title='Swagger' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiPostman className='text-7xl text-orange-400' title='Postman' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaFigma className='text-7xl' title='Figma' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <VscVscode className='text-7xl text-sky-400' title='Visual Studio Code' />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
