import "./navbar.css"

export default function NavBar () {
    return(
        <>
            <nav id="nav">
                <li>
                    <a href="#"><img src="../../../public/images/user.png" alt="" id="user" /></a>
                </li>
                <li>
                    <a href="">Mascotas</a>
                </li>
                <li>
                    <a href="">Ofertas</a>
                </li>
                <li>
                    <a href=""><img src="../../../public/images/box.png" alt="" id="box" /></a>
                </li>
            </nav>
        </>
    )
}