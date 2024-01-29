"use client";
import { useState } from "react";
import ManageServiceCard1 from "../dashboard/card/ManageServiceCard1";
import { Tooltip } from "react-tooltip";
import Link from "next/link";


export default function ServiceDetailExtra1() {

  
  
  const [getSelect, setSelect] = useState([]);
  const [countAdded, setCountAdded] = useState(0)
  const [getExtraService,setExtraService] = useState([])

  // handler
  const serviceSelectHandler = (value) => {
    const isExist = getSelect.includes(value);

    if (!isExist) {
      return setSelect((old) => [...old, value]);
    }

    const deleted = getSelect.filter((item) => item !== value);
    setSelect(deleted);
  };

  const addServiceExtra = (e) =>{
    e.preventDefault()
    setCountAdded(countAdded + 1)
    const addExtraService = {
      id: countAdded,
      title: document.getElementById('title-extra').value,
      brief: document.getElementById('descripcion-extra').value,
      price: document.getElementById('price').value,
      days: document.getElementById('days').value,
    }

    getExtraService.push(addExtraService)

    setExtraService(getExtraService)

  }

  const deleteServiceExtra = (value) =>{
    let filteredServices = getExtraService.filter((element) => element.id !== parseInt(value,10))
    setExtraService(filteredServices)
  }

  return (
    <>
    <div className="row">
    <div className="col-lg-6">
        <div className="ui-content mb40">
          <div className="form-style1">
            <label className="form-label fw500 fz16 dark-color">Título</label>
            <input type="text" id="title-extra" className="form-control" placeholder="Agregue un título a su servicio"/>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="ui-content mb20">
          <div className="form-style1">
            <label className="form-label fw500 fz16 dark-color">Descripción del servicio</label>
            <textarea
            id="descripcion-extra"
            name="text"
            cols={30}
            rows={3}
            placeholder="Agregue una breve descripción de su detalle extra.."
          />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="ui-content mb40">
          <div className="form-style1">
            <label className="form-label fw500 fz16 dark-color">Valor $</label>
            <input type="number" id="price" className="form-control" placeholder="Precio de su servicio extra" min={0} maxLength={7}/>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="ui-content mb40">
          <div className="form-style1">
            <label className="form-label fw500 fz16 dark-color">Tiempo extra</label>
            <input type="number" id="days" className="form-control" placeholder="Dias extras para finalizar" min={0} maxLength={7}/>
          </div>
        </div>
      </div>
    </div>
    <a className="ud-btn btn-thm mb25 me-4" onClick={(e) => addServiceExtra(e)}>
      Agregar
      <i className="fal fa-arrow-right-long" />
    </a>
    <div className="bdrb1 pb15 mb25"></div>
    {getExtraService.length > 0 ?
                            <div className="packages_table table-responsive">
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Título</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Costo Extra</th>
                                    <th scope="col">Días Extra</th>
                                    <th scope="col">Acción</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                  {
                                    getExtraService.map((value) =>{
                                      return (
                                          <tr id={value.id} key={value.id}>
                                            <th className="dashboard-img-service" scope="row">
                                              <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                                <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                                  <h6 className="list-title mb-0">
                                                    <Link href="/service-single">{value.title}</Link>
                                                  </h6>
  
                                                </div>
                                              </div>
                                            </th>
                                            <td className="align-top">
                                              <span className="fz15 fw400">{value.brief}</span>
                                            </td>
                                            <td className="align-top">
                                              <span className="fz14 fw400">${value.price}/Fijo</span>
                                            </td>
                                            <td className="align-top">
                                              <span className="fz14 fw400">{value.days}</span>
                                            </td>
                                            <td className="align-top">
                                              <div className="d-flex">
                                                <a
                                                  className="icon"
                                                  id={value.id}
                                                  onClick={(e)=> deleteServiceExtra(e.currentTarget.id)}
                                                >
                                                  <span className="flaticon-delete" />
                                                </a>
                                              </div>
                                            </td>
                                          </tr>
                                      );
                                    })
                                  }
                                </tbody>
                              </table>
                            </div> : <></>
                          }
    </>
  );
}
