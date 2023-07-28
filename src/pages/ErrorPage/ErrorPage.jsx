import SharedLayout from 'layout/SharedLayout';
import Home from 'pages/Home/Home';
import React from 'react'

const ErrorPage = () => {
    return (
        // <div>404 Not Found</div>
        //  Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.
        <SharedLayout><Home /></SharedLayout>
    )
}

export default ErrorPage;