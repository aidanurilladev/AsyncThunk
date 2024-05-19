import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header_nav">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/Add"}>Add</Link>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Header;