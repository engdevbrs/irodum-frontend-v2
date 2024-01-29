"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SavedInfo from "@/components/dashboard/section/SavedInfo";
import Header3 from "@/components/header/Header3";
import Axios from "axios";

import MobileNavigation2 from "@/components/header/MobileNavigation2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// export const metadata = {
//   title: "Freeio - Freelance Marketplace React/Next Js Template | Saved",
// };

export default function Saved() {

  const deniedAccess = () => {
    return(
      <>
      <Header3 />
      <div className="container mt-5 mb-5">
      <div className="denied" style={{height: '60vh'}}>
          <div className="wrapper mb-4">
              <Image src="/images/gallery/access-denied.png" 
                alt="imagen de confirmación" 
                height={100}
                width={100}/>
          </div>
          <div className="mt-1 mb-3 congrats">
              {
                  response === 403 ? 'SU SESIÓN HA EXPIRADO' : 'ACCESO DENEGADO'
          }
          </div>
          <Link className="ud-btn btn-thm add-joining" href="/login">
                  Iniciar Sesión
          </Link>
      </div>
  </div>
      
    </>
    )
    
}

  const getAccess = (token) =>{
    Axios.post("http://localhost:3001/api/user-info", {
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setLoading(false);
                    setResponse(result.status)
                    setDataUser(result.data)
                    localStorage.setItem('photoUser', "http://localhost:3001/api/images/" + result.data[0].photoUser)
                    setGetPhoto(result.data[0].photoUser)
                    // Axios.get("http://localhost:3001/api/worker/ratings/" + result.data[0].idUser)
                    //     .then((result) => {
                    //         if(result.status === 200){
                    //             setRatingScore(result.data)
                    //             setCommentsWorker(result.data)
                    //         }
                    //     }).catch(error => {
                    //         setRatingScore([])
                    //         setCommentsWorker([])
                    //     });
                    // Axios.get("http://localhost:3001/api/download/speciality/" + result.data[0].idUser)
                    //     .then((result) => {
                    //         if(result.status === 200){
                    //             setEspecialitiesWorker(result.data)
                    //         }
                    //     }).catch(error => {
                    //         setEspecialitiesWorker([])
                    //     });
              }else{
                setResponse(result.status)
              }
              
          }).catch(error => {
                setResponse(error.response.status)
                setLoading(false);
                deniedAccess()
          });
  }

  useEffect(() => {

    const token = sessionStorage.getItem('accessToken')
    if(token !== null && token !== undefined){
      getAccess(token);
    }else{
      setLoading(false);
    }
    

}, []);

  return (
    <>
    
    <MobileNavigation2 />
      <DashboardLayout>
        <SavedInfo />
      </DashboardLayout>
    </>
  );
}
