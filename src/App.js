import './App.css';
import Navbar from './components/navbar/Navbar';
import AppHeader from './components/appHeader/AppHeader';
import Hero from './components/Hero/Hero';
import Auth from './components/authentication/Auth';
import Authentication from './components/authentication/Authentication';
import { createBrowserRouter, createRoutesFromElements,Route ,Link} from 'react-router-dom';


// const Root = () => {
//   return <>
//     <div>
//       <Link to="/"></Link>
//     </div>
//   </>
// }

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Root />}>

  //     </Route>
  //   )
  // )

  return (
    <div className="App">
    <Auth />
    {/* <Authentication /> */}
      {/* <Navbar />
      <AppHeader />
      <Hero/> */}
    </div>
  );
}

export default App;
