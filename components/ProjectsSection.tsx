import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Prediction using Supervised ML",
    description:
      "In this linear regression task I tried to predict the percentage of marks that a student is expected to score based upon the number of hours they studied.",
    image: "/AI.png",
    github: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task01-GRIP-Muhammed%20Ruhaan%20C.ipynb",
    link: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task01-GRIP-Muhammed%20Ruhaan%20C.ipynb",
  },
  {
    name: "Prediction using Unsupervised ML",
    description: "From the Iris dataset,I tried to predict the optimum number of clusters using K-Means and represent it visually on a Scatter Plot.",
    image: "/iris.webp",
    github: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task02-GRIP-Muhammed%20Ruhaan%20C.ipynb",
    link: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task02-GRIP-Muhammed%20Ruhaan%20C.ipynb",
  },
  {
    name: "Prediction using Decision Tree Algorithm",
    description:
      "In this Project I Created the Decision Tree classifier and visualized it graphically.",
    image: "/Decision Tree_1.jpeg",
    github: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task03-GRIP-Muhammed%20Ruhaan%20C.ipynb",
    link: "https://github.com/2uhaan/The-Sparks-Foundation-Internship-Tasks/blob/main/Task03-GRIP-Muhammed%20Ruhaan%20C.ipynb",
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
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
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
