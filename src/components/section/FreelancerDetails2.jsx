"use client";

import { freelancer1, product1 } from "@/data/product";
import FreelancerAbout1 from "../element/FreelancerAbout1";
import FreelancerSkill1 from "../element/FreelancerSkill1";
import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import FreelancerFutureCard1 from "../card/FreelancerFutureCard1";
import { Sticky, StickyContainer } from "react-sticky";
import useScreen from "@/hook/useScreen";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function FreelancerDetail1() {
  const isMatchedScreen = useScreen(1216);
  const { id } = useParams();

  const data = freelancer1.find((item) => item.id == id);
  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-8">
                <div className="cta-service-v1 freelancer-single-v1 pt60 pb60 bdrs16 position-relative overflow-hidden mb30 d-flex align-items-center">
                  <Image
                    width={198}
                    height={226}
                    style={{ height: "fit-content" }}
                    className="left-top-img wow zoomIn"
                    src="/images/vector-img/left-top.png"
                    alt=""
                  />
                  <Image
                    width={255}
                    height={181}
                    style={{ height: "fit-content" }}
                    className="right-bottom-img wow zoomIn"
                    src="/images/vector-img/right-bottom.png"
                    alt=""
                  />
                  <div className="row wow fadeInUp">
                    <div className="col-xl-12">
                      <div className="position-relative pl50 pl20-sm">
                        <div className="list-meta d-sm-flex align-items-center">
                          <a
                            className="position-relative freelancer-single-style"
                            href="#"
                          >
                            <span className="online"></span>
                            <Image
                              width={90}
                              height={90}
                              className="rounded-circle w-100 wa-sm mb15-sm"
                              src={
                                data?.img ? data.img : "/images/team/fl-1.png"
                              }
                              alt="Freelancer Photo"
                            />
                          </a>
                          <div className="ml20 ml0-xs">
                            <h5 className="title mb-1">
                              {data?.name ? data.name : "Leslie Alexander"}
                            </h5>
                            <p className="mb-0">UI/UX Designer</p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm">
                              <i className="fas fa-star vam fz10 review-color me-2"></i>{" "}
                              4.82 94 reviews
                            </p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                              <i className="flaticon-place vam fz20 me-2"></i>{" "}
                              London, UK
                            </p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                              <i className="flaticon-30-days vam fz20 me-2"></i>{" "}
                              Member since April 1, 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-target" />
                      </div>
                      <div className="details">
                        <h5 className="title">Job Success</h5>
                        <p className="mb-0 text">98%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-goal" />
                      </div>
                      <div className="details">
                        <h5 className="title">Total Jobs</h5>
                        <p className="mb-0 text">921</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-fifteen" />
                      </div>
                      <div className="details">
                        <h5 className="title">Total Hours</h5>
                        <p className="mb-0 text">1,499</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-file-1" />
                      </div>
                      <div className="details">
                        <h5 className="title">In Queue Service</h5>
                        <p className="mb-0 text">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-about">
                  <h4>Descripción</h4>
                  <p className="text mb30">
                  Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una 
                  página cuando mire su diseño. El objetivo de utilizar Lorem Ipsum es que tiene una distribución de letras 
                  más o menos normal, en lugar de utilizar "Contenido aquí, contenido aquí", lo que hace que parezca un 
                  inglés legible.
                  </p>
                  <p className="text mb30">
                  Muchos paquetes de autoedición y editores de páginas web utilizan ahora 
                  Lorem Ipsum como texto modelo predeterminado, y una búsqueda de 'lorem ipsum' 
                  descubrirá muchos sitios web que aún están en su infancia. Varias versiones han evolucionado a lo largo de los años, 
                  a veces por accidente, 
                  a veces a propósito (humor inyectado y cosas por el estilo).
                  </p>
                  <hr className="opacity-100 mb60 mt60" />
                  <h4 className="mb30">Education</h4>
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40">
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">Bachlors in Fine Arts</h5>
                      <h6 className="text-thm">Modern College</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb60">
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">Computer Science</h5>
                      <h6 className="text-thm">Harvartd University</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                  <hr className="opacity-100 mb60" />
                  <h4 className="mb30">Work &amp; Experience</h4>
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40">
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">UX Designer</h5>
                      <h6 className="text-thm">Dropbox</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb60">
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">Art Director</h5>
                      <h6 className="text-thm">amazon</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                  <hr className="opacity-100 mb60" />
                  <h4 className="mb30">Awards adn Certificates</h4>
                  <div className="educational-quality ps-0">
                    <div className="wrapper mb40">
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">UI UX Design</h5>
                      <h6 className="text-thm">Udemy</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum
                        <br className="d-none d-lg-block" />
                        primis in faucibus.
                      </p>
                    </div>
                    <div className="wrapper mb60">
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">App Design</h5>
                      <h6 className="text-thm">Google</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum
                        <br className="d-none d-lg-block" />
                        primis in faucibus.
                      </p>
                    </div>
                  </div>
                  <hr className="opacity-100 mb60" />
                  <h4 className="mb30">Featured Services</h4>
                  <div className="row mb35">
                    {product1.slice(0, 3).map((item,i) => (
                      <div className="col-sm-6 col-xl-4" key={ i }>
                        <FreelancerFutureCard1 data={item} />
                      </div>
                    ))}
                  </div>
                  <hr className="opacity-100" />
                  <ServiceDetailReviewInfo1 />
                  <ServiceDetailComment1 />
                </div>
              </div>
              <div className="col-lg-4">
                {isMatchedScreen ? (
                  <Sticky>
                    {({ style }) => (
                      <div className="blog-sidebar ms-lg-auto" style={style}>
                        <FreelancerAbout1 />
                        <FreelancerSkill1 />
                      </div>
                    )}
                  </Sticky>
                ) : (
                  <div className="blog-sidebar ms-lg-auto">
                    <FreelancerAbout1 />
                    <FreelancerSkill1 />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
