import Layout from "../Layout/Layout";
import css from './App.module.css';
import FamilyTree from '../FamilyTree/FamilyTree.jsx';

function App() {

  return (
    <>
    <Layout className={css.body} >
    <main>
      <h1 className={css.text}>Family tree</h1>
    <FamilyTree /> 
    </main>
    </Layout>
    </>
  )
}

export default App
