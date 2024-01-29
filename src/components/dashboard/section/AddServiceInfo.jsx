"use client";
import Axios from "axios";
import { useState } from "react";
import DashboardNavigation from "../header/DashboardNavigation";
import BasicInformation from "./BasicInformation";
import ExtraService from "./ExtraService";
import ServiceGallery from "./ServiceGallery";

export default function AddServiceInfo() {

  const [ extraService, setExtraService ] = useState({})

  const objectExtraService = {
    basicInformation: null,
    extraService: null,
    images: null,
    token: sessionStorage.getItem('accessToken')
  }

  const informationDetail = (props) =>{
    objectExtraService.basicInformation = props
  }

  const addExtraServices = (props) =>{
    objectExtraService.extraService = props
  }

  const addImages = (props) =>{
    objectExtraService.images = props
  }

  const onClickAddService = () =>{

    console.log("extra service", objectExtraService);
    const formFileMultiple = new FormData();

    (objectExtraService.images).map((images) =>{
      formFileMultiple.append('formFileMultiple',images)
    })

    formFileMultiple.append('params', JSON.stringify(objectExtraService))
    Axios.post('http://localhost:3001/api/add-service',formFileMultiple)
                        .then((result) => {
                            if(result.status === 200){
                               console.log("servicio agregado", result);
                            }
                        }).catch(error => {
                          console.log("Algo fallo", error);
                        });
  }

  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Añadir Servicios</h2>
              <p className="text">Agrega nuevos servicios como trabajador.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-lg-end">
              <a className="ud-btn btn-dark" onClick={()=> onClickAddService()}>
                Guardar &amp; Publicar
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
        <div className="ui-content">
        <div className="message-alart-style1">
          <div
            className="alert alart_style_one alert-dismissible fade show mb20"
            role="alert"
          >
            <span><strong>Importante: </strong> Luego de agregar toda la información de tus servicios, no olvides presionar el botón
               <strong> "Guardar & Publicar" </strong> 
               ubicado en la parte superior derecha.</span>
            <i
              className="far fa-xmark btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
        <div className="row">
          <div className="col-xl-12">
            <BasicInformation informationDetail ={informationDetail} />
            <ExtraService addExtraServices={addExtraServices}/>
            <ServiceGallery addImages={addImages}/>
          </div>
        </div>
      </div>
    </>
  );
}
