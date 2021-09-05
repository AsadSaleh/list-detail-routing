import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import EmailDetail from "./components/EmailDetail";
import EmailList from "./components/EmailList";
import { Button, Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <h4 style={{ color: "white" }}>Aplikasi Gahoo!</h4>
        </Header>
        <Layout>
          <Sider>
            <Route component={EmailList} path="/" />
          </Sider>
          <Content>
            <Route component={EmailDetail} path="/email/:emailId" />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
      {/* <div className="layout-container">
        <div className="layout-left">
          <Route component={EmailList} path="/" />
        </div>

        <div className="layout-right">
          <Route component={EmailDetail} path="/email/:emailId" />
        </div>
      </div> */}

      {/* <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button> */}
    </BrowserRouter>
  );
}

export default App;
