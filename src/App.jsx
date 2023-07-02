import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { AppBottomBar } from "./components/AppBottomBar";
import React, { useEffect, useState } from "react";

export const App = () => {
    const [users, setUsers] = useState([]);
    const tg = window.Telegram.WebApp;

    const Layout = styled.div``;
    const Status = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 1.5em;
        text-transform: uppercase;
    `;
    const StatusBlock = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const Roulette = styled.div``;
    const Content = styled.div`
        padding: 15px;
    `;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            const result = response.json();
            setUsers(result);
        });
    }, []);

    console.log(users);

    return (
        <Layout>
            <AppBottomBar />
            {/* <Routes>
                <Route path="/2">
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus aliquam dignissimos iste vero, illum,
                        vitae ab quis voluptate at sunt totam quas quia eum hic,
                        veniam fugiat quod accusamus? Qui?
                    </React.Fragment>
                </Route>
            </Routes> */}

            <Content>
                <Status>
                    <StatusBlock>
                        <span>Номер комнаты: 0</span>
                        <span>Пользователей онлайн: 0</span>
                    </StatusBlock>
                    <span>До начала игры: 2:40</span>
                </Status>
                {/* <Roulette /> */}
            </Content>
        </Layout>
    );
};
