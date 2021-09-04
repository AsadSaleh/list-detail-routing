import emails from "../database/emails";
import { Link } from "react-router-dom";

export default function EmailList() {
  return (
    <div>
      {emails.map((email) => (
        <EmailListCard
          id={email.id}
          title={email.title}
          sender={email.sender}
        />
      ))}
    </div>
  );
}

function EmailListCard({ id, title, sender }) {
  return (
    <Link to={`/email/${id}`}>
      <div className="email-list-card-container">
        <div className="email-list-card-title">{title}</div>
        <div className="email-list-card-sender">{sender}</div>
      </div>
    </Link>
  );
}
