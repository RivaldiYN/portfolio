import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Laravel" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Figma" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="md:w-1/2">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p>
            Hi, my name is Aldi and I am a{" Web Development with "}
            <span className="font-bold">{"highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, and looking for full-time or freelance opportunities.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Experience Organizational</h1>
      <p className="text-gray-500 mb-4">
        Here are some of the organizations I have worked with.
      </p>
      <div className="flex flex-row">
        <p className="bg-gray-200 px-4 py-2 mr-2 mt-2">X</p>
        <p className="bg-gray-200 px-4 py-2 mr-2 mt-2">Y</p>
        <p className="bg-gray-200 px-4 py-2 mr-2 mt-2">Z</p>
      </div>
    </div>
        </div>
      </div>
      <div className="md:w-1/2 md:text-left flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
        <div className="flex flex-wrap flex-row justify-center">
          {skills.map((item, idx) => {
            return (
              <p
                key={idx}
                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
              >
                {item.skill}
              </p>
            )
          })}
        </div>
        <div className="hidden lg:block">
          <Image
            src="/foto.jpg"
            alt=""
            width={325}
            height={325}
            className="px-5 py-2 pt-5 rounded-full shadow-2xl"
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutSection
