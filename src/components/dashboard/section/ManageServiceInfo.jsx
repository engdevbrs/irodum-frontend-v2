"use client";
import Link from "next/link";
import DashboardNavigation from "../header/DashboardNavigation";
import { useEffect, useState } from "react";
import Axios from "axios";
import Pagination1 from "@/components/section/Pagination1";
import ManageServiceCard1 from "../card/ManageServiceCard1";
import { manageService } from "@/data/dashboardNavigation";
import ProposalModal1 from "../modal/ProposalModal1";
import DeleteModal from "../modal/DeleteModal";
import Header3 from "@/components/header/Header3";
import Image from "next/image";
import Loading from "@/components/section/Loading";

const tab = [
  "Servicios Activos",
  "Pending Services",
  "Ongoing Services",
  "Completed Services",
  "Canceled Services",
];

export default function ManageServiceInfo() {

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

  const [selectedTab, setSelectedTab] = useState(0);
  const [ servicesData, setServicesData ] = useState([])


  const deniedAccess = () => {
    return(
      <>
      <div className="container mt-5 mb-5">
      <div className="denied" style={{height: '70vh'}}>
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
                    setResponse(result.status)
                    Axios.get("http://localhost:3001/api/get-services",{
                        headers: {
                            'authorization': `${token}`
                            }
                    })
                    .then((result) => {
                        if(result.status === 200){
                          setLoading(false);
                          setServicesData(result.data)
                        }
                    }).catch(error => {
                          setServicesData(error.response.status)
                    });
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
            <Loading /></> : response === 200 ? 
                <>
                <div className="dashboard__content hover-bgc-color">
                  <div className="row pb40">
                    <div className="col-lg-12">
                      <DashboardNavigation />
                    </div>
                    <div className="col-lg-9">
                      <div className="dashboard_title_area">
                        <h2>Administrar Servicios</h2>
                        <p className="text">Aquí podrás administrar todos tus servicios.</p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="text-lg-end">
                        <Link
                          href="/add-services"
                          className="ud-btn btn-dark default-box-shadow2"
                        >
                          Nuevo Servicio
                          <i className="fal fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                        <div className="navtab-style1">
                          <nav>
                            <div className="nav nav-tabs mb30">
                              {tab.map((item, i) => (
                                <button
                                  key={i}
                                  className={`nav-link fw500 ps-0 ${
                                    selectedTab == i ? "active" : ""
                                  }`}
                                  onClick={() => setSelectedTab(i)}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </nav>
                          {selectedTab === 0 && (
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Título</th>
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Entrega</th>
                                    <th scope="col">Costo/Tipo</th>
                                    <th scope="col">Acciones</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {servicesData.map((item,i) => (
                                    <ManageServiceCard1 key={i} data={item} />
                                  ))}
                                </tbody>
                              </table>
                              <div className="mt30">
                                <Pagination1 />
                              </div>
                            </div>
                          )}
                          {selectedTab === 1 && (
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Type/Cost</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {manageService.slice(0, 4).map((item,i) => (
                                    <ManageServiceCard1 key={i} data={item} />
                                  ))}
                                </tbody>
                              </table>
                              <div className="mt30">
                                <Pagination1 />
                              </div>
                            </div>
                          )}
                          {selectedTab === 2 && (
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Type/Cost</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {manageService.slice(0, 3).map((item,i) => (
                                    <ManageServiceCard1 key={i} data={item} />
                                  ))}
                                </tbody>
                              </table>
                              <div className="mt30">
                                <Pagination1 />
                              </div>
                            </div>
                          )}
                          {selectedTab === 3 && (
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Type/Cost</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {manageService.slice(0, 4).map((item,i) => (
                                    <ManageServiceCard1 key={i} data={item} />
                                  ))}
                                </tbody>
                              </table>
                              <div className="mt30">
                                <Pagination1 />
                              </div>
                            </div>
                          )}
                          {selectedTab === 4 && (
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Type/Cost</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {manageService.slice(0, 5).map((item,i) => (
                                    <ManageServiceCard1 key={i} data={item} />
                                  ))}
                                </tbody>
                              </table>
                              <div className="mt30">
                                <Pagination1 />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProposalModal1 />
                <DeleteModal />
              </>
                : deniedAccess()
          }
          
      </>
      }

    </>
  );
}
