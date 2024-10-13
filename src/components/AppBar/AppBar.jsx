import css from "./AppBar.module.css";

export default function AppBar() {
  
  return (
    <header className={css.header}>
    <img src="https://www.svgheart.com/wp-content/uploads/2021/11/SvgHeart.Com-218.png" alt="logo" width='50' className={css.logo}/>
    <p className={css.nameProject}>Family Tree</p>
  </header>
  );
}