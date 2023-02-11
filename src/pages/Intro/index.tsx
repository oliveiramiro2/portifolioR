import React, { useLayoutEffect, useRef } from "react";
import gsap, { Power1, Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiChevronsDown } from "react-icons/bi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { Link } from "react-router-dom";

import me from "../../assets/Ramiro.png";

const Intro: React.FC = () => {
    const textInfo = useRef(null);
    const title1 = useRef(null);
    const title2 = useRef(null);
    const myPhoto = useRef(null);
    const bgInfo1 = useRef(null);
    const bgInfo2 = useRef(null);
    const textLink1 = useRef(null);
    const textLink2 = useRef(null);
    const textLink3 = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateTitle = gsap.timeline();
        animateTitle
            .to("#screenInitial3", {
                xPercent: -100,
                ease: Power1.easeIn,
            })
            .to("#screenInitial2", {
                xPercent: 100,
                ease: Power1.easeInOut,
            })
            .to("#screenInitial1", {
                yPercent: -100,
                ease: Power1.easeOut,
            })
            .fromTo(
                title1.current,
                {
                    xPercent: 120,
                    opacity: 0,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: "back",
                }
            )
            .fromTo(
                myPhoto.current,
                {
                    opacity: 0,
                    yPercent: -120,
                    duration: 3,
                    scale: 0,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1.2,
                    ease: Power2.easeIn,
                    scale: 1,
                }
            )
            .fromTo(
                title2.current,
                {
                    xPercent: -120,
                    opacity: 0,
                    y: -30,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: Power2.easeIn,
                }
            )
            .fromTo(
                "#iconDown",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                }
            );

        gsap.fromTo(
            bgInfo1.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                opacity: 0,
                xPercent: -120,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                opacity: 1,
                xPercent: 0,
                start: "top top",
                delay: 1,
                duration: 1,
                ease: Power1.easeInOut,
            }
        );
        gsap.fromTo(
            bgInfo2.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                opacity: 0,
                yPercent: -120,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                opacity: 1,
                yPercent: 0,
                start: "top top",
                duration: 1,
                ease: Power1.easeInOut,
            }
        );
        gsap.fromTo(
            textInfo.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                xPercent: 120,
                scale: 0,
                opacity: 0,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                xPercent: 1,
                scale: 1,
                opacity: 1,
                start: "top top",
                duration: 1,
                delay: 2,
                ease: Power2.easeOut,
            }
        );
        gsap.fromTo(
            textLink1.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 0,
                opacity: 0,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 1,
                opacity: 1,
                start: "top top",
                duration: 0.3,
                delay: 3.1,
                ease: Power4.easeInOut,
            }
        );
        gsap.fromTo(
            textLink2.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 0,
                opacity: 0,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 1,
                opacity: 1,
                start: "top top",
                duration: 0.3,
                delay: 3.5,
                ease: Power4.easeInOut,
            }
        );
        gsap.fromTo(
            textLink3.current,
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 0,
                opacity: 0,
                start: "top top",
            },
            {
                scrollTrigger: {
                    trigger: textInfo.current,
                    toggleActions: "restart none none none",
                },
                scale: 1,
                opacity: 1,
                start: "top top",
                duration: 0.3,
                delay: 3.9,
                ease: Power4.easeInOut,
            }
        );
    }, []);

    return (
        <div className="w-screen min-h-screen overflow-x-hidden">
            <div
                id="screenInitial1"
                className="h-screen w-screen z-10 absolute bg-pokedex-paralax bg-contain bg-center bg-no-repeat bg-red-500"
            />
            <div
                id="screenInitial2"
                className="h-screen w-screen z-20 absolute bg-youtube-paralax bg-contain bg-center bg-no-repeat bg-white"
            />
            <div
                id="screenInitial3"
                className="h-screen w-screen z-30 absolute bg-netflix-paralax bg-contain bg-center bg-no-repeat bg-black"
            />
            <div className="h-screen z-0 flex flex-col items-center bg-intro bg-cover bg-no-repeat">
                <h2
                    ref={title1}
                    className="relative text-8xl font-great-vibes text-white pl-10 pt-10 max-xl:text-6xl max-sm:text-center max-sm:pl-0"
                >
                    Seja bem vindo!
                </h2>
                <img
                    className="relative"
                    width={300}
                    ref={myPhoto}
                    src={me}
                    alt="Myself"
                />
                <h2
                    ref={title2}
                    className="relative text-8xl font-great-vibes text-white pl-10 pt-10 max-xl:text-6xl max-sm:text-center max-sm:pl-0 max-sm:top-5"
                >
                    Este é o meu portfólio ☺
                </h2>
                <div className="absolute bottom-0">
                    <div className="flex flex-col justify-center items-center bg-black bg-opacity-5">
                        <BiChevronsDown
                            id="iconDown"
                            size={40}
                            className="text-pallet-blue animate-bounce"
                        />
                    </div>
                </div>
            </div>
            <div
                id="meetMe"
                className="h-screen w-screen flex items-center justify-center"
            >
                <div
                    ref={bgInfo1}
                    className="bg-pallet-purple relative h-screen pl-5 pr-5"
                >
                    <div className="flex h-screen items-center justify-center">
                        <p
                            ref={textInfo}
                            id="textMyInfo"
                            className="text-pallet-blue font-itim max-md:text-sm max-lg:text-center text-4xl after:content-['|'] after:ml-1 after:animate-blink after:text-pallet-blue"
                        >
                            Me chamo Ramiro. Eu sou desenvolvedor Web/Mobile.
                            Estudante de t.i. e apaixonado por tecnologia e
                            programação!!!
                        </p>
                    </div>
                </div>
                <div
                    ref={bgInfo2}
                    className="relative bg-pallet-blue h-screen w-1/2 pl-5 pr-5"
                >
                    <div className="h-screen flex flex-col gap-y-20 items-start justify-around">
                        <div ref={textLink1} className="relative">
                            <Link to="/contact">
                                <div className="flex justify-center items-center gap-2">
                                    <MdOutlineConnectWithoutContact
                                        size={35}
                                        className="text-pallet-purple"
                                    />
                                    <p className="text-pallet-purple text-3xl font-extrabold font-great-vibes">
                                        Contato
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div ref={textLink2} className="relative">
                            <Link to="/skills">
                                <div className="flex justify-center items-center gap-2">
                                    <GiSkills
                                        size={35}
                                        className="text-pallet-purple"
                                    />
                                    <p className="text-pallet-purple text-3xl font-extrabold font-great-vibes">
                                        Habilidades
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div ref={textLink3} className="relative">
                            <Link to="/projects">
                                <div className="flex justify-center items-center gap-2">
                                    <HiOutlineDeviceMobile
                                        size={35}
                                        className="text-pallet-purple"
                                    />
                                    <p className="text-pallet-purple text-3xl font-extrabold font-great-vibes">
                                        Projetos
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
