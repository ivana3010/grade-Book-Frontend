import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Zadatak1 from "./Zadatak1";
import { get_subjects, search_subjects } from './data/SubjectSource';
import Zadatak4b from './Zadatak4b';
import AddStudent from './AddStudent';
import AddSubject from './AddSubject';
import { get_students, search_students } from './data/StudentSource';
import { get_classes } from './data/ClassSource';
import EditStudent from './EditStudent';
import EditSubject from './EditSubject';
import Zadatak4a from './Zadatak4a';
import PasswordOverlay from './PasswordOverlay';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    
    children:[
      {
        path:"zadatak1",
        loader: async ({request,params,context}) => {//ucitava podatke koji se prikazuju u komponenti
          let url = new URL(request.url);
          let q = url.searchParams.get("q");
          if(!q || q === ""){
            return get_subjects();
          }else{
            return search_subjects(q);
          }
              
        },
        element: <Zadatak1 />
      },
      {
        path:"B",
        element:<h1>B</h1>
      },
      {
      path:"zadatak4a",
      loader: async ({request,params,context}) => {
        let url = new URL(request.url);
        let q = url.searchParams.get("q");
        if(!q || q === ""){
          return get_subjects();
        }else{
          return search_subjects(q);
        }
            
      },
      element:<Zadatak4a />
      },
      {
        path:"zadatak4b",
        loader: async ({request,params,context}) => {
          let url = new URL(request.url);
          let searchStudent = url.searchParams.get("searchStudent");
          if(!searchStudent || searchStudent === ""){
            return get_students();
          }else{
            return search_students(searchStudent);
          }
        },
        element:<Zadatak4b/> 
      },
      {
        path:"/zadatak4b/add",
        loader: async()=>{
          return get_classes();
        },
        element:<AddStudent />
      },
      {
        path:"/zadatak4b/edit/:studentId",
        loader: async()=>{
          return get_classes();
        },
        element:<EditStudent />
      },
      {
        path:"/zadatak4a/add",
        
        element:<AddSubject />
      },
      {
        path:"/zadatak4a/edit/:subjectId",
        element:<EditSubject/>
      }
    ]
  }
]);
function App() {
  const [isAuthorized, setIsAuthorized] = useState(false); //da bi se pratilo da li korisnik unosi ok sifru, false jer na pocetku nije dozvoljen pristup dpl ne pogodi sifru

  const handleCorrectPassword = () => {//kada unese ok sifru
    setIsAuthorized(true); 
  };

  return (
    <div>
      {!isAuthorized && <PasswordOverlay onCorrectPassword={handleCorrectPassword} />} {/*dok nije dobra sifra prikazuje se passoverl */}
      {isAuthorized && <RouterProvider router={router} />} 
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

