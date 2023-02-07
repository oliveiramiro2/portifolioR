import React from "react";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFilePdf,
    AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import Header from "../../components/Header";

const ContactUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-black pb-20 m-3 mt-10 mb-10 rounded-lg">
            <Header white page={1} />
            <div className="animate__animated animate__slideInDown animate__slow w-screen flex justify-center pt-20">
                <p
                    className="text-white flex text-center font-great-vibes text-6xl"
                    id="skills"
                >
                    Contatos
                </p>
            </div>
            <div className="mt-20 flex flex-col items-center p-10 w-full gap-y-10 bg-white rounded-2xl">
                <div className="animate__animated animate__bounceInLeft animate__faster">
                    <a
                        href="https://www.linkedin.com/in/oliveiramiro2/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-2 pl-5">
                            <AiFillLinkedin size={35} color="#0a66c2" />
                            <span className="font-extrabold"> LinkedIn </span>
                        </div>
                    </a>
                </div>
                <div className="animate__animated animate__bounceInLeft animate__fast">
                    <a
                        href="https://github.com/oliveiramiro2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-2 pl-5">
                            <AiFillGithub size={35} />
                            <span className="font-extrabold"> GitHub </span>
                        </div>
                    </a>
                </div>
                <div className="animate__animated animate__bounceInLeft">
                    <a
                        href="https://drive.google.com/file/d/1_5deK1Pf4RFVfO0hiirNqSMOsZWnFUz_/view?usp=share_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-2 pl-5">
                            <AiFillFilePdf color="#f00" size={35} />
                            <span className="font-extrabold"> Currículo </span>
                        </div>
                    </a>
                </div>
                <div className="animate__animated animate__bounceInLeft  animate__slow">
                    <div className="flex items-center gap-2 pl-5">
                        <AiOutlineWhatsApp color="#0f0" size={35} />
                        <span className="font-extrabold">
                            {" "}
                            Whatsapp: 37 988037773{" "}
                        </span>
                    </div>
                </div>
                <div className="animate__animated animate__bounceInLeft  animate__slower">
                    <div className="flex items-center gap-2 pl-5">
                        <SiGmail color="#f00" size={35} />
                        <span className="font-extrabold">
                            {" "}
                            E-mail: ramiromares95@gmail.com{" "}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
