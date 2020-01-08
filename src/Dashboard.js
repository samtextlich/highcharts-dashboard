import React, { Component } from "react";
import "antd/dist/antd.css";
import "./dashboard.css";
import { Layout, Menu } from "antd";
//import View1 from './views/View1';
//import View2 from './views/View2';
import View3 from "./views/View3";
import View4 from "./views/View4";
import View5 from "./views/View5";

const { Header, Content, Sider, Footer } = Layout;

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ background: "#f57c00" }}>
            <div class="toolbar-title">TensorBoard</div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#ccc", padding: "25px" }}>
              <Content style={{ height: 200 }}>View1 - Settings</Content>
              <Content style={{ height: 300 }}>View2 - RunSelector</Content>
            </Sider>
            <Layout style={{ padding: "25px" }}>
              <div>
                <b>Feature Importance Dashboard</b>
              </div>
              <div>&nbsp;</div>
              <Content
                style={{
                  background: "#fff",
                  padding: 25,
                  margin: 0,
                  minHeight: 50
                }}
              >
                <View3 />
              </Content>
              <Layout>
                <Content
                  style={{ background: "#fff", padding: 25, minHeight: 500 }}
                >
                  <View5 />
                </Content>
              </Layout>
            </Layout>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            <div>Alexander Rossner ©2020</div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
