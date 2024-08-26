import React from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Button>
                <Link to='/auth'>Авторизация</Link>
            </Button>

            <Button>
                <Link to='/registor'>Регистрация</Link>
            </Button>
        </div>
    );
};

export default HomePage;