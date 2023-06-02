import './Style.css';


const NavbarTop = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className='col'>
                        <div className="row">
                            <div className="col">
                                <a className="navbar-brand logoText">
                                    <img src="https://toneopeats.com/public/img/logo.png?v=1" />
                                </a>
                            </div>
                            <div className="col-8 center-menu">
                                <li className="row justify-content-md-center toplink">
                                    <a href="/" className="col-md-auto active">
                                        Meal Subscription Plans
                                    </a>
                                    <a href="/" className="col col-lg-2">
                                        Menu
                                    </a>
                                </li>

                                {/* <div className='row'>
                                    <li className="TopliMid">
                                        <a href="https://toneopeats.com" className="active">Meal Subscription Plans</a>
                                        <a href="https://toneopeats.com/menus">Menu</a>
                                    </li>

                                </div> */}
                            </div>
                            <div className="col">
                            <span onclick="openNav()" class="float-end">
                                <img src="https://toneopeats.com/public/img/iconmenu.svg"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarTop;