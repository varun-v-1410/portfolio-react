import Skill from "./Skill";

interface SkillSetProps {
    title: string;
    icon: React.ReactNode;
    heading?: {level:string;lang:{title:string;icon:React.ReactNode}[]}[];
    last?: boolean;
    languages?: { title: string; icon: React.ReactNode }[];
}

export default function SkillSet({ title, icon, heading, languages,last }: SkillSetProps ) {
    return(
        <div className="w-screen h-auto mt-20 md:h-screen md:mt-0">
            <div className="grid gap-5 md:gap-20 md:grid-cols-2 h-full w-full">
                <div className={`flex items-center justify-center order-first ${last ? "md:order-last md:justify-start" : "md:justify-end"}`}>
                    <div className="w-[60%] md:h-[60%] shadow-2xl shadow-[#545353] border-2 border-[#2c2d68] rounded-4xl items-center justify-center flex flex-col gap-5 text-center text-3xl font-bold p-10 md:p-0">
                        <span className="text-9xl">{icon}</span>
                        <span className="text-wrap">{title}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className={`w-full ${last ? "md:pl-20" : "md:pr-20"}`}>
                    <div className="w-full">
                        {
                        heading?.map((item, index) => (
                            <div className="w-full" key={index}>
                                <div key={index} className="w-full text-center text-3xl border-[#2c2d68] border-b-2 font-bold ">{item.level}</div>
                                <div className="w-full flex flex-row flex-wrap gap-5 py-5 text-center justify-center">
                                    {item.lang.map((lang, langIndex) => (
                                        <Skill key={langIndex} title={lang.title} icon={lang.icon} />
                                    ))}
                                </div>
                            </div>

                        ))}
                        {languages?
                        <div className="w-full flex flex-row flex-wrap gap-5 pt-10 text-center justify-center">
                            {languages.map((lang, index) => (
                                <Skill key={index} title={lang.title} icon={lang.icon} />
                            ))}
                        </div>
                        :null}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}