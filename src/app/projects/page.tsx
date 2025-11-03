import { FaGithub } from "react-icons/fa";
import projects from "../_assets/projects.json";

export default function Projects() {
    return (
        <div className="w-full h-fit p-10 md:pb-0">
            <div className="w-full text-center flex flex-row flex-wrap justify-center gap-10">
                {
                    projects.map((project, index) => (
                        <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 bg-[#f1e1a7]">
                            <img className="w-full" src={project.image ? project.image : "./undraw_developer_activity_re_39tg.svg"} alt={"project-img"} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-2xl mb-2">{project.name}</div>
                            </div>
                            <div className="px-6 pb-4 flex flex-wrap gap-3">
                                {project.tech && project.tech.length > 0 ?
                                (project.tech?.map((tech, index) => (
                                    <span key={index} className="inline-block bg-[#2c2d68] rounded-full px-3 py-1 text-sm font-semibold text-[#f1e1a7]">#{tech}</span>
                                ))) : (
                                    <span className="inline-block bg-[#2c2d68] rounded-full px-3 py-1 text-sm font-semibold text-[#f1e1a7] mr-2">#Coming Soon</span>
                                )}
                            </div>
                            <div className="px-6 pb-4 border-t-2 border-[#2c2d68]">
                                <div className="flex justify-between mt-5 items-center">
                                    {project.github? <a href={project.github} target="_blank" className="text-[#2c2d68] font-bold text-3xl"><FaGithub /></a> : null}
                                    {project.live? <a href={project.live} target="_blank" className="bg-[#2c2d68] text-[#f1e1a7] font-bold py-2 px-4 rounded">Live Demo</a> : null}
                                    {project["in-development"]? <span className="bg-green-500 text-white font-bold py-2 px-4 rounded">Still In Development</span> : null}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}