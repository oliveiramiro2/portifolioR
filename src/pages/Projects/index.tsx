import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import clsx from "clsx";

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

interface IPropsContainProject {
    setNumberProjectShowed?: Function;
    title: string;
    description: string;
    img: number;
}

const ContainProject: React.FC<IPropsContainProject> = ({
    setNumberProjectShowed,
    title,
    description,
    img,
}) => {
    let imgShowed;

    switch (img) {
        case 0:
            imgShowed = Netflix;
            break;
        case 1:
            imgShowed = Pokedex;
            break;
        case 2:
            imgShowed = Youtube;
            break;
        default:
            imgShowed = Breve;
            break;
    }

    return (
        <div className="w-2/5 max-md:w-full border-2 rounded-lg flex flex-col items-center p-10 bg-violet-400 hover:bg-violet-800 mt-10 animate__animated animate__bounceInLeft border-pallet-black">
            <p className="text-3xl font-extrabold tracking-wider font-great-vibes">
                {title}
            </p>
            <img
                className={clsx("p-20", {
                    "cursor-pointer": setNumberProjectShowed !== undefined
                })}
                src={imgShowed}
                alt="Netflix"
                onClick={() =>
                    setNumberProjectShowed !== undefined
                        && setNumberProjectShowed(img)

                }
            />
            <p className="font-extrabold">{description}</p>
        </div>
    );
};

const Projects: React.FC = () => {
    const [numberProjectShowed, setNumberProjectShowed] = useState<
        number | undefined
    >(undefined);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        document.title = "Ramiro portfólio - Projetos";
    }, []);

    return (
        <div className="min-h-screen bg-black pb-10 pt-20 rounded-lg">
            <Header page={3} />
            <div className="bg-pallet-purple pb-10 m-3 mb-10 rounded-lg">
                <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                    <h2
                        id="projects"
                        className="text-pallet-black font-extrabold tracking-wider flex text-center font-great-vibes text-6xl"
                    >
                        Projetos
                    </h2>
                </div>
                {numberProjectShowed === undefined ? (
                    <div className="w-full flex flex-wrap mt-20 justify-between p-10">
                        <ContainProject
                            setNumberProjectShowed={setNumberProjectShowed}
                            title="Netflix"
                            description="Aplicativo React-Native"
                            img={0}
                        />
                        <ContainProject
                            setNumberProjectShowed={setNumberProjectShowed}
                            title="Pokédex"
                            description="Aplicativo ReactJS"
                            img={1}
                        />
                        <ContainProject
                            setNumberProjectShowed={setNumberProjectShowed}
                            title="Youtube"
                            description="Aplicativo React-Native"
                            img={2}
                        />
                        <ContainProject
                            title="Em Breve"
                            description="Em Breve"
                            img={3}
                        />
                        <ContainProject
                            title="Em Breve"
                            description="Em Breve"
                            img={3}
                        />
                        <ContainProject
                            title="Em Breve"
                            description="Em Breve"
                            img={3}
                        />
                    </div>
                ) : (
                    <div className="bg-violet-400 bg-opacity-90 m-10 mb-0 rounded-lg border-4 border-white">
                        <div>
                            <div className="cursor-pointer">
                                <p
                                    className="font-itim flex items-center font-extrabold text-xl gap-1 m-2 text-red-500"
                                    onClick={() =>
                                        setNumberProjectShowed(undefined)
                                    }
                                >
                                    <BiArrowBack size={25} /> Voltar
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
                                    <p className="font-itim font-bold text-2xl text-pallet-cyan">
                                        <a
                                            href={
                                                projectsKeys[
                                                    numberProjectShowed
                                                ].value
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            O Link do site
                                        </a>
                                    </p>
                                )}
                                <p className="font-itim font-extrabold text-xl mt-5">
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
        </div>
    );
};

export default Projects;
