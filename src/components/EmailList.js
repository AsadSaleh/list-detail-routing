import emails from "../database/emails";

export default function EmailList() {
  return (
    <div>
      {emails.map((email) => (
        <div>
          <p>{email.title}</p>
          <p>{email.sender}</p>
        </div>
      ))}
    </div>
  );
}
