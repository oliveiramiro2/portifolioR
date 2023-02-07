import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import Netflix from "../../assets/netflix2.png";
import Pokedex from "../../assets/Pokedex2.png";
import Youtube from "../../assets/youtube2.png";
import Breve from "../../assets/breve.png";
import Header from "../../components/Header";

const projectsKeys = [
    {
        id: 0,
        value: "v3ji4n3hpeivj42m4kaqoaiq74",
        gitRepository: "https://github.com/oliveiramiro2/NetflixClone",
        describe:
            "Um clone do aplicativo Netflix usando React-Native e Typescript",
        mobile: true,
    },
    {
        id: 1,
        value: "https://pokedex-ramiro.netlify.app/",
        gitRepository: "https://github.com/oliveiramiro2/pokedex-updated",
        describe:
            "Uma pokédex criada com ReactJs e Typescript, além de libs como Styled Components e Material UI",
        mobile: false,
    },
    {
        id: 2,
        value: "ij45o7aynaz4ovu7bnppllvq3u",
        gitRepository: "https://github.com/oliveiramiro2/RNYoutubeInferface",
        describe:
            "Um clone do aplicativo Youtube usando React-Native e Typescript",
        mobile: true,
    },
];

const Projects: React.FC = () => {
    const [numberProjectShowed, setNumberProjectShowed] = useState<
        number | undefined
    >(undefined);

    return (
        <div className="min-h-screen bg-black pb-10 m-3 mt-10 mb-10 rounded-lg">
            <Header white page={3} />
            <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                <h2
                    id="projects"
                    className="text-white flex text-center font-great-vibes text-6xl"
                >
                    Projetos
                </h2>
            </div>
            {numberProjectShowed === undefined ? (
                <div className="w-full flex flex-wrap mt-20 justify-between p-10">
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white hover:bg-gray-200 mt-10 animate__animated animate__bounceInLeft border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes">
                            Netflix
                        </p>
                        <img
                            className="cursor-pointer p-20"
                            src={Netflix}
                            alt="Netflix"
                            onClick={() => setNumberProjectShowed(0)}
                        />
                        <p className="font-extrabold">
                            Aplicativo React-Native
                        </p>
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white hover:bg-gray-200 mt-10 animate__animated animate__bounceInRight border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Pokédex
                        </p>
                        <img
                            className="cursor-pointer p-20"
                            src={Pokedex}
                            alt="Pokedex"
                            onClick={() => setNumberProjectShowed(1)}
                        />
                        <p className="font-extrabold">Aplicativo ReactJS</p>
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white hover:bg-gray-200 mt-10 animate__animated animate__bounceInLeft animate__slow border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Youtube
                        </p>
                        <img
                            className="cursor-pointer p-20"
                            src={Youtube}
                            alt="Youtube"
                            onClick={() => setNumberProjectShowed(2)}
                        />
                        <p className="font-extrabold">
                            Aplicativo React-Native
                        </p>
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white mt-10 animate__animated animate__bounceInRight animate__slow border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Em Breve
                        </p>
                        <img className="p-20" src={Breve} alt="Breve" />
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white mt-10 animate__animated animate__bounceInLeft animate__slower border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Em Breve
                        </p>
                        <img className="p-20" src={Breve} alt="Breve" />
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white mt-10 animate__animated animate__bounceInRight animate__slower border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Em Breve
                        </p>
                        <img className="p-20" src={Breve} alt="Breve" />
                    </div>
                    <div className="w-2/5 max-md:w-full border rounded-lg flex flex-col items-center p-10 bg-white mt-10 animate__animated animate__bounceInLeft animate__slower border-red-600">
                        <p className="text-3xl font-extrabold tracking-wider font-great-vibes textDescribe">
                            Em Breve
                        </p>
                        <img className="p-20" src={Breve} alt="Breve" />
                    </div>
                </div>
            ) : (
                <div className="bg-white bg-opacity-90 m-10 mb-0 rounded-lg border-4 border-white">
                    <div>
                        <div className="cursor-pointer">
                            <p
                                className="font-itim flex items-center font-extrabold gap-1 m-2 text-red-500"
                                onClick={() =>
                                    setNumberProjectShowed(undefined)
                                }
                            >
                                <BiArrowBack size="20px" /> Voltar
                            </p>
                        </div>
                        <div className="flex items-center flex-col">
                            <p className="font-itim font-bold text-2xl max-md:text-lg max-md:pl-10">
                                {projectsKeys[numberProjectShowed].describe}
                            </p>
                            {projectsKeys[numberProjectShowed].mobile ? (
                                <p className="font-itim font-bold text-2xl max-md:text-lg max-md:pl-10">
                                    Uma prévia será aberta com o appetize a
                                    abaixo na tela!
                                </p>
                            ) : (
                                <p className="font-itim font-bold text-2xl text-cyan-600">
                                    <a
                                        href={
                                            projectsKeys[numberProjectShowed]
                                                .value
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        O Link do site
                                    </a>
                                </p>
                            )}
                            <p className="font-itim font-bold text-lg">
                                Aprecie ☺
                            </p>
                            <a
                                href={
                                    projectsKeys[numberProjectShowed]
                                        .gitRepository
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="font-itim font-bold text-2xl text-sky-500 underline mt-10"
                            >
                                Repositório no GitHub
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        {projectsKeys[numberProjectShowed].mobile && (
                            <iframe
                                id="appetize"
                                src={`https://appetize.io/embed/${projectsKeys[numberProjectShowed].value}?device=pixel4`}
                                title="netflix"
                                height="700px"
                                width="320px"
                                frameBorder="0"
                                scrolling="no"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
