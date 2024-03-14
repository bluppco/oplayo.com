// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index"

const Li = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="font-lato uppercase text-xl text-white text-center">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>
    )

}

export default Li
