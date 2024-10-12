import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import Button from '../Button/Button.jsx';
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
    <Button>Update</Button>
    <Button>Delete</Button>
    </div>
    </main>
    </Layout>
    </>
  )
}

export default App
