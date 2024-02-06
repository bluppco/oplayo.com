// IMPORTS LAYOUTS
import Container from "@/layouts/Container.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index"

const Header = ( props ) => {

    return(
        <header className="fixed top-10 w-full hidden md:block bg-primary h-20">
            <Container>
                <section className="flex items-center justify-between h-full">
                    <Link href="/" aria_label="">
                        <div className="w-40 h-8">
                            <img
                                src="/logo/oplayo-logo.png"
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </Link>
                    <nav className="flex gap-6 items-center">
                        <Link href="/contact" aria_label="">
                            <p className="uppercase text-oplayo_green font-lato">Contact</p>
                        </Link>
                        <div className="size-4">
                            <img
                                src="/icons/green/search.svg"
                                alt=""
                                className="size-4"
                            />
                        </div>
                        <div className="size-6">
                            <img
                                src="/icons/green/menu.svg"
                                alt=""
                                className="size-6"
                            />
                        </div>
                    </nav>
                </section>
            </Container>
        </header>
    )

}

export default Header
