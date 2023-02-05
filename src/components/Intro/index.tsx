import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
        }, 1000);
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
                                    <a
                                        href="https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after"
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <span>Contatos</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="example.com"
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        Habilidades
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="example.com"
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        Projetos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ParallaxLayer>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 2, end: 3 }}>
                    <div>
                        <h2 className="text-8xl text-white pl-10 pt-10 max-xl:text-6xl max-sm:text-center max-sm:pl-0">
                            Seja bem vindo!
                        </h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 0, end: 3 }}>
                    <div className="h-screen w-2/5 flex items-center max-lg:w-screen max-lg:justify-center">
                        <div className="bg-opacity-50 bg-black ml-9 p-1 rounded-md max-lg:ml-0 max-lg:flex max-lg:items-center max-lg:w-3/4">
                            <p
                                id="textMyInfo"
                                className="text-white max-md:text-lg max-lg:text-center text-4xl after:content-['|'] after:ml-1 after:animate-blink after:text-cyan-300"
                            >
                                Me chamo Ramiro. Eu sou desenvolvedor
                                Web/Mobile. Estudante de TI, apaixonado por
                                tecnologia e programação!!!
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>
                {/* <ParallaxLayer sticky={{ start: 3, end: 3 }} factor={1.5}>
                    <div className="self-start w-screen h-10 bg-black bg-opacity-80">
                        <ul className="h-10 flex justify-between items-center pr-10 pl-10">
                            <li>
                                <a
                                    href="https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after"
                                    rel="noreferrer"
                                    className="text-white"
                                >
                                    <span>Contatos</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="example.com"
                                    rel="noreferrer"
                                    className="text-white"
                                >
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a
                                    href="example.com"
                                    rel="noreferrer"
                                    className="text-white"
                                >
                                    Projetos
                                </a>
                            </li>
                        </ul>
                    </div>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    );
};

export default Intro;
