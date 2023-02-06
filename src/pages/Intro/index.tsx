import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
    const writeInfo: Function = (elementT: HTMLBodyElement): void => {
        const elementText = elementT;
        const text = elementText.innerHTML.split("");
        elementText.innerHTML = "";
        text.forEach((value: string, index: number) => {
            setTimeout(() => {
                elementText.innerHTML += value;
            }, 100 * index);
        });
    };

    useEffect(() => {
        setTimeout(() => {
            const elementText = document.querySelector("#textMyInfo");
            writeInfo(elementText);
        }, 500);
    }, []);

    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <Parallax pages={4} style={{ top: "0", left: "0" }}>
                <ParallaxLayer
                    sticky={{ start: 0, end: 3 }}
                    className="flex align-center"
                >
                    <ParallaxLayer offset={0} sticky={{ start: 0, end: 3 }}>
                        <div className="w-screen h-screen bg-bg-paralax bg-no-repeat bg-cover" />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        sticky={{ start: 1, end: 3 }}
                        className="pt-11 max-lg:hidden"
                    >
                        <div className="bg-netflix-paralax bg-no-repeat bg-cover w-96 h-80 -translate-x-full" />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        sticky={{ start: 1.3, end: 3 }}
                        className="pt-9 max-lg:hidden"
                    >
                        <div className="bg-pokedex-paralax bg-no-repeat bg-cover w-72 h-96 -translate-x-48" />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        sticky={{ start: 1.6, end: 3 }}
                        className="pt-14 max-lg:hidden"
                    >
                        <div className="bg-youtube-paralax bg-no-repeat bg-cover w-48 h-96" />
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 3 }}>
                        <div className="self-start w-screen h-10 bg-black bg-opacity-80">
                            <ul className="h-10 flex justify-between items-center pr-10 pl-10">
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-white font-itim flex items-center gap-1"
                                    >
                                        <MdOutlineConnectWithoutContact
                                            color="#fff"
                                            size={20}
                                        />
                                        <span>Contatos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/skills"
                                        className="text-white font-itim flex items-center gap-1"
                                    >
                                        <GiSkills color="#fff" size={20} />
                                        <span>Habilidades</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/projects"
                                        className="text-white font-itim flex items-center gap-1 mr-2"
                                    >
                                        <HiOutlineDeviceMobile
                                            color="#fff"
                                            size={20}
                                        />
                                        <span>Projetos</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </ParallaxLayer>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 2, end: 3 }}>
                    <div>
                        <h2 className="text-8xl font-itim text-white pl-10 pt-10 max-xl:text-6xl max-sm:text-center max-sm:pl-0">
                            Seja bem vindo!
                        </h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 0, end: 3 }}>
                    <div className="h-screen w-2/5 flex items-center max-lg:w-screen max-lg:justify-center">
                        <div className="bg-opacity-50 bg-black ml-9 p-1 rounded-md max-lg:ml-0 max-lg:flex max-lg:items-center max-lg:w-3/4">
                            <p
                                id="textMyInfo"
                                className="text-white font-great-vibes max-md:text-lg max-lg:text-center text-4xl after:content-['|'] after:ml-1 after:animate-blink after:text-cyan-300"
                            >
                                Me chamo Ramiro. Eu sou desenvolvedor
                                Web/Mobile. Estudante de TI, apaixonado por
                                tecnologia e programação!!!
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 3, end: 3 }} factor={1.5}>
                    <div className="self-start w-screen h-10 bg-black bg-opacity-0">
                        <ul className="h-10 flex justify-between items-center pr-10 pl-10 opacity-0">
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white font-itim flex items-center gap-1"
                                >
                                    <MdOutlineConnectWithoutContact
                                        color="#fff"
                                        size={20}
                                    />
                                    <span>Contatos</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/skills"
                                    className="text-white font-itim flex items-center gap-1"
                                >
                                    <GiSkills color="#fff" size={20} />
                                    <span>Habilidades</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="text-white font-itim flex items-center gap-1 mr-2"
                                >
                                    <HiOutlineDeviceMobile
                                        color="#fff"
                                        size={20}
                                    />
                                    <span>Projetos</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Intro;