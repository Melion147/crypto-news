import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import { Layout, Typography, Space } from "antd"
import {Navbar, Exchanges, HomePage, CryptoCurrencies, News, CryptoDetails} from "./components"
import './App.css'


export default () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                        
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                            <Route path="*">
                                <HomePage/>
                            </Route>
                        </Switch>
                    </div>
                    </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{color: "white", textAlign:"center"}}>
                        CryptoVerse <br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

