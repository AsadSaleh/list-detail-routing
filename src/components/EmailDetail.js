import emails from "../database/emails";
import { Typography } from "antd";

export default function EmailDetailScreen({ match, location, history }) {
  // Ambil emailId dari URL Parameters:
  const emailId = match.params.emailId;

  // Dengan emailId yang ada, ambil data email dengan id yang sesuai:
  const email = emails.filter((email) => email.id === emailId)[0];

  // Conditional Rendering:
  // const suatuBoolean = true;
  // if (suatuBoolean) {
  //   return <h1>Rafi</h1>;
  // }
  // return <h1>Fauzan</h1>;

  if (email !== null && email !== undefined) {
    // Render:
    return (
      <EmailDetail
        sender={email.sender}
        title={email.title}
        body={email.body}
      />
    );
  }

  return <div> Email Tidak Ditemukan </div>;
}

// const { Title } = Typography;

function EmailDetail({ sender, title, body }) {
  return (
    <div style={{ padding: 20 }}>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Title level={5}>{sender}</Typography.Title>
      <Typography.Paragraph>{body}</Typography.Paragraph>
    </div>
  );
}
