import { PROJECTS } from "@/app/constants"
import { motion } from "framer-motion"
import Link from "next/link"

export const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projetos</motion.h2>
            <div className="">
                {PROJECTS.map((project, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <div className="w-full lg:w-1/4">
                            <motion.img
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded" />
                        </div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">{project.description} 
                            <Link href={project.link} className="mb-4 text-purple-800 rounded px-2 py-1 text-sm font-medium bg-neutral-900 hover:text-purple-600">Link</Link>
                            </p>
                            <div className="flex flex-wrap flex-row mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
