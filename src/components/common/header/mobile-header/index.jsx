// IMPORTS FRAMER
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index"

// IMPORTS COMPONENTS
import Li from "./li/index"

const HeaderMobile = ( props ) => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden relative z-30 w-full bg-oplayo_dark_slate">
            <Container>
                <nav className="py-4">
                    <div className="flex justify-between items-center z-30 relative h-12">
                        <a href="/">
                            <div className="h-8 w-40">
                                <img
                                    src="/logo/oplayo-logo.png"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </a>
                        <div className="flex items-center gap-4">
                            <p className="font-lato uppercase text-white">KONTAKT</p>
                            <div className="flex gap-6 items-center">
                                <div onClick={ () => updateOpen( !isOpen ) }>
                                    {

                                        isOpen &&
                                        <img
                                            src="/icons/close.svg"
                                            className="w-8 aspect-square"
                                        />

                                    }
                                    {

                                        !isOpen &&
                                        <img
                                            src="/icons/menu.svg"
                                            className="w-8 aspect-square"
                                        />

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnimatePresence initial={ false }>
                        {

                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate={ isOpen ? "open" : "collapsed" }
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "100vh" },
                                    collapsed: { opacity: 0, height: "0px" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="grow"
                            >
                                <ul className="flex flex-col gap-6 items-center justify-center h-full z-10">
                                    <Li href="/das-team" aria_label="">Team</Li>
                                    <Li href="/kontakt" aria_label="">Kontakt</Li>
                                    <Li href="/blog" aria_label="">Blog</Li>
                                    <Li href="/oplayo-news-via-linkedin" aria_label="">Oplayo News via LinkedIn</Li>
                                    <Li href="/workshops" aria_label="">Workshops</Li>
                                    <Li href="/karriere" aria_label="">Karriere bei Oplayo</Li>
                                </ul>
                            </motion.div>
                        }
                    </AnimatePresence>
                </nav>
            </Container>
        </header>
    )

}

export default HeaderMobile
