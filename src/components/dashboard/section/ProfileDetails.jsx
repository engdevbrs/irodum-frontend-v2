"use client";
import React, { useEffect, useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";
import Image from "next/image";
import data from '../../../data/Constants'
import Axios from 'axios'


export default function ProfileDetails() {
  const { jobs } = data

  const [localidades, setLocalidades] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [countWords,setCountWords] = useState(255)

  const [getGender, setGender] = useState({
    option: "Seleccionar género",
    value: null,
  });
  const [getSpecialization, setSpecialization] = useState({
    option: "Seleccionar especialidad",
    value: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event);
    setSelectedImage(URL.createObjectURL(file));
  };

  const [getRegion, setRegion] = useState({
    option: "Seleccionar Región",
    value: "seleccionar",
  });

  const [getCity, setCity] = useState({
    option: "Seleccionar Ciudad",
    value: "seleccionar",
  });

  const [getComunne, setComunne] = useState({
    option: "Seleccionar Comuna",
    value: "seleccionar",
  });

  // handlers
  const genderHandler = (option, value) => {
    setGender({ option, value });
  };

  const specializationHandler = (option, value) => {
    setSpecialization({ option, value });
  };

  const regionHandler = (option, value) => {
    setRegion({ option, value });
    const ciudadesIndex = localidades.find(element => {
      return element.region === value;
    });
    setCity({ option: "Seleccionar Ciudad", value: "seleccionar"});
    setComunne({ option: "Seleccionar Comuna", value: "seleccionar" });
    setCiudades(ciudadesIndex.ciudad);
    setComunas([]);
  };

  const cityHandler = (option, value) => {
    setCity({ option, value });
    const comunasData = ciudades.find(element => {
      return element[0] === value;
  });
  setComunne({ option: "Seleccionar Comuna", value: "seleccionar" });
  setComunas(comunasData[1].comunas);
  };

  const comunneHandler = (option, value) => {
    setComunne({ option, value });
  };

  const CountingWords = (e) =>{
    if (e.code === 'Space') {
      return countWords
    }
    if(e.code === "Backspace" && e.target.value.substr((e.target.value).length) === " "){
      return countWords
    }
    if(e.code === "Backspace" && countWords === 255){
      return countWords     
    }else{
      if(e.code === "Backspace" && countWords < 255){
        setCountWords(countWords + 1)
      }else{
        setCountWords(countWords - 1)
      }
    }
  }

  useEffect(() => {

    Axios.get("https://www.services.irodum.com/api/localidades").then((res)=>{
        
        if(res.status === 200 && res.data !== null && res.data !== undefined){
          setLocalidades(res.data);
        }else{
          setLocalidades([]);
        }
    });        
  },[]);

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Información Personal</h5>
        </div>
        <div className="col-xl-7">
          <div className="profile-box d-sm-flex align-items-center mb30">
            <div className="profile-img mb20-sm">
              <Image
                height={71}
                width={71}
                className="rounded-circle wa-xs"
                src={selectedImage ? selectedImage : "/images/team/fl-1.png"}
                style={{
                  height: "71px",
                  width: "71px",
                  objectFit: "cover",
                }}
                alt="profile"
              />
            </div>
            <div className="profile-content ml20 ml0-xs">
              <div className="d-flex align-items-center my-3">
                <a
                  className="tag-delt text-thm2"
                  onClick={() => setSelectedImage(null)}
                >
                  <span className="flaticon-delete text-thm2" />
                </a>
                <label>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                    onChange={handleImageChange}
                  />
                  <a className="upload-btn ml10">Subir foto de perfil</a>
                </label>
              </div>
              <p className="text mb-0">
              El tamaño máximo de archivo es de 1 MB, dimensión mínima: 330x300 y adecuado
                son .jpg &amp; .png
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Juan"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Apellidos
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    placeholder="Ej: González"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Rut
                  </label>
                  <input
                    id="rut"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 11111111-1"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Ej: micorreo@gmail.com"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Celular
                  </label>
                  <input
                    id="cellphone"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 912345678"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Eslogan (Opcional)
                  </label>
                  <input
                    id="slogan"
                    type="text"
                    className="form-control"
                    placeholder="Ej: “Alguien en quien confiar”"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Precio/Hora
                  </label>
                <input
                    id="hourly"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 20.000"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    id="gender"
                    label="Género"
                    defaultSelect={getGender}
                    data={[
                      { option: "Masculino", value: "Masculino" },
                      {
                        option: "Femenino",
                        value: "Femenino",
                      },
                      { option: "Prefiero no responder", value: "Prefiero no responder" },
                    ]}
                    handler={genderHandler}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb20">
                  <SelectInput
                    id="Specialization"
                    label="Especialidad"
                    defaultSelect={getSpecialization}
                    data={jobs.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={specializationHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="region"
                    label="Región"
                    defaultSelect={getRegion}
                    data={localidades.map((item) =>{ 
                      return { option: item.region, value: item.region }
                    })}
                    handler={regionHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="city"
                    label="Ciudad"
                    defaultSelect={getCity}
                    data={ciudades.map((item) =>{ 
                      return { option: item[0], value: item[0] }
                    })}
                    handler={cityHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="commune"
                    label="Comuna"
                    defaultSelect={getComunne}
                    data={comunas.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={comunneHandler}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                  Preséntese
                  </label>
                  <textarea cols={30} rows={6} onKeyUp={(e)=>CountingWords(e)} placeholder="Ej: Soy un trabajador con más de 5 años de experiencia...." />
                  <p>{`Quedan ${countWords} palabras`}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <Link className="ud-btn btn-thm" href="/contact">
                    Guardar
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
