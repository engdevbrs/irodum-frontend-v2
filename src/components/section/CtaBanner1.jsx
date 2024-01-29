"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CtaBanner1() {
  const path = usePathname();

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden ${
            path === "/" || path === "/about-1"
              ? "bgc-light-yellow"
              : path === "/become-seller"
              ? "bgc-thm4"
              : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                    Todo un mundo de talento{" "}
                      <br className="d-none d-xl-block" /> freelance a tu alcance
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Prueba de calidad</h4>
                      <p className="text mb-0 fz15">
                      Verifique las muestras de trabajo de cualquier trabajador, las reseñas de los clientes y la verificación de identidad.
                      <br className="d-none d-lg-block" />{" "}
                        
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Sin coste hasta terminar el trabajo</h4>
                      <p className="text mb-0 fz15">
                      Entreviste a posibles candidatos para su trabajo, negocie tarifas y  
                      <br className="d-none d-lg-block" /> pague solo para el trabajo que apruebe.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Seguro y protegido</h4>
                      <p className="text mb-0 fz15">
                      Concéntrese en su trabajo sabiendo que le ayudamos a proteger sus datos y
                        privacidad. Estamos aquí con soporte 24 horas al día, 7 días a la semana si lo necesita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            height={500}
            width={500}
            className="cta-banner3-img wow fadeInLeft h-100 object-fit-cover"
            src="/images/about/about-5.jpg"
            alt="cta banner 3"
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
