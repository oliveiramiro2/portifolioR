import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Html5 from "../../assets/HTML5.png";
import Css3 from "../../assets/CSS3.png";
import JavaScript from "../../assets/js.png";
import TypeScript from "../../assets/ts.png";
import ReactJs from "../../assets/react.png";
import Node from "../../assets/node.png";
import Figma from "../../assets/figma.png";

const skillsDescribes = [
    {
        id: 0,
        describe:
            "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. Usado para estruturação da página.",
    },
    {
        id: 1,
        describe:
            "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.",
    },
    {
        id: 2,
        describe:
            "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. E uma das linguagens de programação mais usadas no mundo.",
    },
    {
        id: 3,
        describe:
            "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    },
    {
        id: 4,
        describe:
            "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Criada para resolver o problema de comunicação entre diversas partes do front-end de um página Web, criada pela Meta dona do Facebook, Instagram e Whatsapp. O React-Native segue a mesma lógica, porém é usado para criação de aplicativos mobile multiplataforma (Android/IOS) usando apenas um código.",
    },
    {
        id: 5,
        describe:
            "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
    },
    {
        id: 6,
        describe:
            "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.",
    },
];

const Skills: React.FC = () => {
    const [numberShowSkill, setNumberShowSkill] = useState<number>(0);

    useEffect(() => {
        skillsDescribes.forEach(element => {
            if (element.id === numberShowSkill) {
                document
                    .getElementById(`containImg${element.id}`)
                    ?.classList.add("animate__fadeOutDown");
            } else {
                document
                    .getElementById(`containImg${element.id}`)
                    ?.classList.remove("animate__fadeOutDown");
            }
        });
    }, [numberShowSkill]);

    return (
        <div className="min-h-screen bg-black">
            <Header white page={2} />
            <div>
                <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                    <p
                        className="text-white flex text-center font-great-vibes text-6xl"
                        id="skills"
                    >
                        Habilidades
                    </p>
                </div>
                <div className="mt-20 flex flex-col items-center justify-center">
                    <div className="w-screen flex flex-wrap items-end justify-center gap-5 bg-slate-200 mb-10 pb-6">
                        <div className="animate__animated animate__fadeInUp">
                            <div
                                id="containImg0"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(0)}
                                    src={Html5}
                                    alt="Html5"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg1"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(1)}
                                    src={Css3}
                                    alt="Css3"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg2"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(2)}
                                    src={JavaScript}
                                    alt="JavaScript"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg3"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(3)}
                                    src={TypeScript}
                                    alt="TypeScript"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg4"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(4)}
                                    src={ReactJs}
                                    alt="React-Js"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg5"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(5)}
                                    src={Node}
                                    alt="Node"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                        <div className="animate__animated animate__slideInLeft">
                            <div
                                id="containImg6"
                                className="animate__animated rounded-full h-28 w-28 flex items-center justify-center hover:bg-blue-700 mt-10"
                            >
                                <img
                                    onClick={() => setNumberShowSkill(6)}
                                    src={Figma}
                                    alt="Figma"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 mb-20 border border-dashed border-gray-400 rounded-md p-5">
                        <span className="font-itim font-bold text-2xl text-white">
                            {skillsDescribes[numberShowSkill].describe}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
