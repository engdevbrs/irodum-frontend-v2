"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardInfo from "@/components/dashboard/section/DashboardInfo";
import Axios from "axios";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header3 from "@/components/header/Header3";
import { DashboardContext } from "@/app/contexts/useDashContext";
import Loading from "@/components/section/Loading";
// export const metadata = {
//   title: "Freeio - Freelance Marketplace React/Next Js Template | Dashboard",
// };

export default function Dashboard() {

  const [ dataUser, setDataUser ] = useState([])
  const [ response, setResponse ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ inputs , setInputs ] = useState(false)
  const [ validationCell, setValidationCell ] = useState(false)
  const [ cancelButton, setCancelButton ] = useState(false)
  const [ colorCard, setColorCard ] = useState("#33D09C")
  const [ savePhoto, setSavePhoto ] = useState(false)
  const [ getPhoto, setGetPhoto ] = useState(false)
  const [ enableSave, setEnableSave ] = useState(false)
  const [ updateProgress, setUpdateProgress ] = useState(0)
  const [ updateProgressSpec, setUpdateProgressSpec ] = useState(0)
  const [ hiddenProgress, showProgress ] = useState(true)
  const [ hiddenProgressSpec, showProgressSpec ] = useState(true)
  const [ratingScore, setRatingScore] = useState(0);
  const [commentsWorker, setCommentsWorker] = useState([])
  const [especialitiesWorker, setEspecialitiesWorker] = useState([])
  const [ descriptSpeciality, setDescriptSpeciality ] = useState(true)
  const [ specialityForm, setSpecialityForm ] = useState(false)
  const [ descriptSpecialityMsge, setDescriptSpecialityMsge ] = useState([])
  const [ specialityFormMsge, setSpecialityFormMsge ] = useState([])
  const [showModalSpeciality, setShowModalSpeciality] = useState(false);



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
    {
        <>
          
          {loading === true ? 
          <>
            <Header3 />
            <Loading />
            </> : response === 200 ? 
                <>
                <DashboardContext.Provider value={dataUser}>
                    <MobileNavigation2 />
                    <DashboardLayout>
                    <DashboardInfo />
                    </DashboardLayout>
                </DashboardContext.Provider>
            </> 
                : deniedAccess()
          }
          
      </>
      }

    </>
  );
}
