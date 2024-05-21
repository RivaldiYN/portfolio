import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Klasifikasi Gambar Rock Paper Scissors",
    description:
      "Final Project Machine Learning for Beginners from Dicoding Indonesia!💻",
    image: "/klasifikasi-gambar.png",
    github: "https://github.com/RivaldiYN/Klasifikasi-Gambar",
    link: "https://github.com/RivaldiYN/Klasifikasi-Gambar",
  },
  {
    name: "Finalist of Gemastik 2023",
    description:
      "User Experience Design Competition (UX Design)",
    image: "/pedulikan.jpg",
    github: "x",
    link: "https://www.linkedin.com/posts/rivaldiyn_journey-of-gemastik-xvi-i-am-proud-to-activity-7111194271466098689-ZmaV?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "SlicedeFruitGame",
    description:
      "The objective of this project is to build a fruit ninja game with python. This game is built with the help of pygame module and basic concept of python.",
    image: "/slicedefruit.png",
    github: "https://github.com/RivaldiYN/SlicedeFruitGame",
    link: "https://github.com/RivaldiYN/SlicedeFruitGame",
  },
  {
    name: "Pemira KM ITERA 2022",
    description: "Designing a web with a directive display using the Codeigniter and Tailwind CSS frameworks which contain activities for electing student presidents of the Sumatra Institute of Technology.",
    image: "/pemira-2022.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "PPLK 2022",
    description:
      "Website Program Pengenalan Lingkungan Kampus (PPLK) 2022 ITERA.",
    image: "/pplk-2022.png",
    github: "https://github.com/RivaldiYN/pplk-2022",
    link: "https://github.com/RivaldiYN/pplk-2022",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
