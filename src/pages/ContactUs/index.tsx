import React, { useEffect } from "react";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFilePdf,
    AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import Header from "../../components/Header";

const ContactUs: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
        document.title = "Ramiro portfólio - Contatos";
    }, []);

    return (
        <div className="min-h-screen w-full bg-pallet-black pt-20 pb-20">
            <Header page={1} />
            <div className="bg-pallet-purple h-screen rounded-lg mb-10 mr-2 ml-2 pl-1 pr-1">
                <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                    <p
                        className="text-pallet-black font-extrabold flex text-center font-great-vibes text-6xl"
                        id="skills"
                    >
                        Contatos
                    </p>
                </div>
                <div className="flex justify-center w-full mt-20 bg-pallet-black rounded-xl">
                    <div className="flex flex-col items-start p-10 gap-y-6 ml-28 pb-3 max-sm:ml-5">
                        <div className="animate__animated animate__bounceInLeft animate__faster">
                            <a
                                href="https://www.linkedin.com/in/oliveiramiro2/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center gap-2 pl-5 hover:scale-125 transition-all">
                                    <div className="bg-white rounded-full p-1 shadow-xl shadow-pallet-purple">
                                        <AiFillLinkedin
                                            size={35}
                                            className="rounded-full p-1"
                                            color="#0a66c2"
                                        />
                                    </div>
                                    <span className="font-extrabold text-white">
                                        {" "}
                                        LinkedIn{" "}
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="animate__animated animate__bounceInLeft animate__fast">
                            <a
                                href="https://github.com/oliveiramiro2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center gap-2 pl-5 hover:scale-125 transition-all">
                                    <div className="bg-white rounded-full p-1 shadow-xl shadow-pallet-purple">
                                        <AiFillGithub
                                            size={35}
                                            className="bg-white rounded-full p-1"
                                        />
                                    </div>
                                    <span className="font-extrabold text-white">
                                        {" "}
                                        GitHub{" "}
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="animate__animated animate__bounceInLeft">
                            <a
                                href="https://drive.google.com/file/d/1_5deK1Pf4RFVfO0hiirNqSMOsZWnFUz_/view?usp=share_link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center gap-2 pl-5 hover:scale-125 transition-all">
                                    <div className="bg-white rounded-full p-1 shadow-xl shadow-pallet-purple">
                                        <AiFillFilePdf
                                            color="#f00"
                                            className="bg-white rounded-full p-1"
                                            size={35}
                                        />
                                    </div>
                                    <span className="font-extrabold text-white">
                                        {" "}
                                        Currículo{" "}
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="animate__animated animate__bounceInLeft  animate__slow">
                            <div className="flex items-center gap-2 pl-5 hover:scale-125 transition-all">
                                <div className="bg-white rounded-full p-1 shadow-xl shadow-pallet-purple">
                                    <AiOutlineWhatsApp
                                        color="#0f0"
                                        className="bg-white rounded-full p-1"
                                        size={35}
                                    />
                                </div>
                                <span className="font-extrabold text-white">
                                    {" "}
                                    Whatsapp: 37 988037773{" "}
                                </span>
                            </div>
                        </div>
                        <div className="animate__animated animate__bounceInLeft  animate__slower">
                            <div className="flex items-center gap-2 pl-5 hover:scale-125 transition-all">
                                <div className="bg-white rounded-full p-1 shadow-xl shadow-pallet-purple">
                                    <SiGmail color="#f00" size={35} />
                                </div>
                                <span className="font-extrabold text-white">
                                    {" "}
                                    E-mail: ramiromares95@gmail.com{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
