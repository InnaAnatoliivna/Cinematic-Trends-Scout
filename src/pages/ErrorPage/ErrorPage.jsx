// import SharedLayout from 'layout/SharedLayout';
// import Home from 'pages/Home/Home';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    setTimeout(() => navigate('/'), 2000)

    return (
        <h2>404 Not Found</h2>
        //  Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.
        // <SharedLayout><Home /></SharedLayout>
    )
}

export default ErrorPage;