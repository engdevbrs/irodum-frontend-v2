"use client";
import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";
import ServiceDetailFaq1 from "../element/ServiceDetailFaq1";
import ServiceDetailPrice1 from "../element/ServiceDetailPrice1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import ServiceDetailSlider1 from "../element/ServiceDetailSlider1";
import { Sticky, StickyContainer } from "react-sticky";
import useScreen from "@/hook/useScreen";
import ServiceContactWidget1 from "../element/ServiceContactWidget1";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Loading from "./Loading";

export default function ServiceDetail1(props) {

  const isMatchedScreen = useScreen(1216);
  const [getSelect, setSelect] = useState([]);

  const { infoextraservice, infoservice, aptitudes } = props

  // handler
  const serviceSelectHandler = (value) => {
    const isExist = getSelect.includes(value);

    if (!isExist) {
      return setSelect((old) => [...old, value]);
    }

    const deleted = getSelect.filter((item) => item !== value);
    setSelect(deleted);
  };


  useEffect(() => {
  }, []);

  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <ServiceDetailSlider1 data={infoservice} imgs={props.imgs}/>
                  <div className="service-about">
                    <h4>Acerca del Servicio</h4>
                    <p className="text mb30">
                      {infoservice.servicedetail}
                    </p>
                    <div className="d-flex align-items-start mb50">
                      <div className="list1">
                        <h6>Tipo de Servicio</h6>
                        <p className="text mb-0">{infoservice.category}</p>
                      </div>
                      <div className="list1 ml80">
                        <h6>Mis Aptitudes</h6>
                        {aptitudes.map((value,key) =>{
                          return(
                            <p className="text mb-0" key={key}>{value}</p>
                          )
                        })}
                      </div>
                    </div>
                    <hr className="opacity-100 mb60" />
                    <h4>Agregar Servicios Extras</h4>
                    <div className="extra-service-tab mb40 mt30">
                      <nav>
                        <div className="nav flex-column nav-tabs">
                          {infoextraservice.map((item,i) => (
                            <button
                              key={ i }
                              className={`nav-link ${
                                getSelect?.includes(item.id) ? "active" : ""
                              }`}
                            >
                              <label className="custom_checkbox fw500 text-start">
                                {`${item.title} (+${item.days} días)`}
                                <span className="text text-bottom">{item.brief}</span>
                                <input
                                  type="checkbox"
                                  checked={getSelect?.includes(item.id)}
                                  onChange={() => serviceSelectHandler(item.id)}
                                />
                                <span className="checkmark" />
                              </label>
                              <span className="price">${item.price}</span>
                            </button>
                          ))}
                        </div>
                      </nav>
                    </div>
                    <hr className="opacity-100 mb60" />
                    <ServiceDetailReviewInfo1 />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner" style={style}>
                          <div className="blog-sidebar ms-lg-auto">
                            <ServiceDetailPrice1 />
                            <ServiceContactWidget1 />
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar ms-lg-auto">
                        <ServiceDetailPrice1 />
                        <ServiceContactWidget1 />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <ServiceDetailComment1 />
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
