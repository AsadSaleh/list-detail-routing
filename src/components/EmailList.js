import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import emails from "../database/emails";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function EmailList() {
  return (
    <div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {emails.map((email, index) => (
          <Link to={`/email/${email.id}`} key={email.id}>
            <Menu.Item>{email.title}</Menu.Item>
          </Link>
        ))}
      </Menu>
      {/* {emails.map((email) => (
        <EmailListCard
          id={email.id}
          title={email.title}
          sender={email.sender}
        />
      ))} */}
    </div>
  );
}

function EmailListCard({ id, title, sender }) {
  return (
    <Link to={`/email/${id}`}>
      <div>
        <div>{title}</div>
        <div>{sender}</div>
      </div>
    </Link>
  );
}
