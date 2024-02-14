import style from "./Introduction.module.css";

export default function Introduction() {
  return (
    <section>
      <hr className={style.line} />
      <h2 className={style.text}>
        My name is Monika Høy. Frontend and Mobile developer. I specialize in
        creating impactful and accessible applications with React and React
        Native. Beyond coding, I weave creativity into my skills through
        knitting in my free time.
      </h2>
      <hr className={style.line} />
    </section>
  );
}
