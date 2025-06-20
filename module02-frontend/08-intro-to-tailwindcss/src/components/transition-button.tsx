export default function TransitionButton(props: {
  title: string;
  desc: string;
  customClass: string;
}) {
  return (
    <article
      className={`${props.customClass} bg-gradient-to-r p-7 flex flex-col items-center transition-transform duration-500`}
    >
      <h2 className="text-white font-bold ">{props.title}</h2>
      <p className="text-white font-bold">{props.desc}</p>
    </article>
  );
}
