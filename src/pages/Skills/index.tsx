import React, { useRef, useLayoutEffect, useEffect } from "react";
import {
    SiCss3,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiJira,
    SiJquery,
    SiMaterialui,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import gsap, { Power4 } from "gsap";

import Header from "../../components/Header";

interface IContainSkills {
    children: React.ReactElement;
    title?: string;
}

const ContainSkillsIcons: React.FC<IContainSkills> = ({ children, title }) => {
    const borderAnimated = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        document.title = "Ramiro portfólio - Habilidades";
    }, [])

    useLayoutEffect(() => {
        gsap.fromTo(".hide-contains", {
            opacity: 0,
            xPercent: -120,
        },
        {
            opacity: 1,
            xPercent: 0,
            stagger: 0.5,
            ease: "linear",
        });

        const timelineBorder = gsap.timeline({ repeat: -1 });
        timelineBorder
            .to(borderAnimated.current, {
                width: 24,
                height: 3,
                x: 20,
                duration: 0.2,
                each: "linear",
            })
            .to(borderAnimated.current, {
                width: 24,
                height: 3,
                x: 80,
                duration: 0.5,
                each: Power4.easeIn,
            })
            .to(borderAnimated.current, {
                width: 3,
                x: 112,
                each: "linear",
            })
            .to(borderAnimated.current, {
                height: 24,
                y: 20,
            })
            .to(borderAnimated.current, {
                y: 120,
                each: Power4.easeOut,
                duration: 0.5,
            })
            .to(borderAnimated.current, {
                height: 3,
                y: 152,
                each: "linear",
            })
            .to(borderAnimated.current, {
                width: 24,
                x: 90,
                each: "linear",
                duration: 0.2,
            })
            .to(borderAnimated.current, {
                x: 20,
                each: "linear",
                duration: 0.5,
            })
            .to(borderAnimated.current, {
                width: 3,
                x: 0,
                each: "linear",
            })
            .to(borderAnimated.current, {
                height: 24,
                y: 132,
                each: "linear",
                duration: 0.2,
            })
            .to(borderAnimated.current, {
                y: 60,
                each: "linear",
                duration: 0.5,
            })
            .to(borderAnimated.current, {
                height: 3,
                y: 15,
                each: Power4.easeOut,
            });
    });

    return (
        <div className="mt-5 hide-contains">
            <div ref={borderAnimated} className="bg-purple-700 absolute" />
            <div className="rounded-t-lg shadow-xl shadow-pallet-purple h-28 w-28 flex flex-col items-center justify-center mt-10">
                {children}
                <span className="text-pallet-purple">{title}</span>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-5 bg-pallet-black">
            <Header page={2} />
            <div className=" pb-5 rounded-lg bg-pallet-purple ml-5 mr-5">
                <div>
                    <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                        <p
                            className="text-pallet-black font-extrabold flex text-center font-great-vibes text-6xl"
                            id="skills"
                        >
                            Habilidades
                        </p>
                    </div>
                    <div className="mt-20 flex flex-col items-center justify-center pl-2 pr-2">
                        <div className="w-full rounded-lg flex flex-wrap items-end justify-center gap-5 bg-pallet-black mb-10 pb-6">
                            <ContainSkillsIcons title="Html5">
                                <SiHtml5
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Css3">
                                <SiCss3
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="JavaScript">
                                <SiJavascript
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="TypeScript">
                                <SiTypescript
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="ReactJs">
                                <SiReact
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="TailwindCss">
                                <SiTailwindcss
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Figma">
                                <SiFigma
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="CSS-in-JS">
                                <SiStyledcomponents
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Material UI">
                                <SiMaterialui
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Redux">
                                <SiRedux
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="React Router">
                                <SiReactrouter
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="JQuery">
                                <SiJquery
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Jest">
                                <SiJest
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="NodeJS">
                                <SiNodedotjs
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="MySQL">
                                <SiMysql
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Postgres">
                                <SiPostgresql
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="MongoDB">
                                <SiMongodb
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                            <ContainSkillsIcons title="Jira">
                                <SiJira
                                    size={60}
                                    className="text-pallet-purple"
                                />
                            </ContainSkillsIcons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
