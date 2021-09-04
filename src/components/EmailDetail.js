export default function EmailDetail({ sender, title, body }) {
  return (
    <div>
      <h4>{title}</h4>
      <h6>{sender}</h6>
      <p>{body}</p>
    </div>
  );
}
