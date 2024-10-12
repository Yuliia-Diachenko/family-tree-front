import css from "./AppBar.module.css";

export default function AppBar() {
  
  return (
    <header className={css.header}>
    <img src="./././public/tree.png" alt="logo" width='50'/>
    <p className={css.nameProject}>Family Tree</p>
  </header>
  );
}