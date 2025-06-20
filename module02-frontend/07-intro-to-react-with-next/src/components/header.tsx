export default function Header(props: { userName: string; userAge: number }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>Logo</h1>
      <p>Hi, {props.userAge} years old!</p>
    </header>
  );
}
