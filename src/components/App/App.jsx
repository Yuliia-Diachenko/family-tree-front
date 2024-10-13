import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import Layout from "../Layout/Layout";
import css from './App.module.css';
import FamilyTree from '../FamilyTree/FamilyTree.jsx';

function App() {

  return (
    <>
    <Layout className={css.body} >
    <main>
    <FamilyTree />
   <div className={css.buttonBar}>
    <ModalWindow>Create</ModalWindow>
    <ModalWindow>Update</ModalWindow>
    <ModalWindow>Delete</ModalWindow>
    </div>
    </main>
    </Layout>
    </>
  )
}

export default App
