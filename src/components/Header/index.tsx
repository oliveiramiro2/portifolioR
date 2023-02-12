import React from "react";
import { MdOutlineConnectWithoutContact, MdHome } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface IProps {
    white?: boolean;
    page?: number;
}

const Header: React.FC<IProps> = ({ white = false, page = 0 }) => {
    return (
        <div
            className={clsx(
                "self-start w-screen h-14 bg-black bg-opacity-90 fixed top-0 z-10 border-b-2 border-pallet-cyan",
                {
                    " bg-white": white,
                }
            )}
        >
            <ul className="h-10 flex justify-between items-end pr-10 pl-10">
                <li>
                    {page === 1 ? (
                        <Link
                            to="/"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <MdHome size={20} />
                            <span>Home</span>
                        </Link>
                    ) : (
                        <Link
                            to="/contact"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <MdOutlineConnectWithoutContact size={20} />
                            <span>Contatos</span>
                        </Link>
                    )}
                </li>
                <li>
                    {page === 2 ? (
                        <Link
                            to="/"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <MdHome size={20} />
                            <span>Home</span>
                        </Link>
                    ) : (
                        <Link
                            to="/skills"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <GiSkills size={20} />
                            <span>Habilidades</span>
                        </Link>
                    )}
                </li>
                <li>
                    {page === 3 ? (
                        <Link
                            to="/"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1 mr-2",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <MdHome size={20} />
                            <span>Home</span>
                        </Link>
                    ) : (
                        <Link
                            to="/projects"
                            className={clsx(
                                "text-white font-itim flex items-center gap-1 mr-2",
                                {
                                    "text-black": white,
                                }
                            )}
                        >
                            <HiOutlineDeviceMobile size={20} />
                            <span>Projetos</span>
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Header;
