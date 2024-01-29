import Image from "next/image";
import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="our-about bgc-thm2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="position-relative mb30-lg">
                <div className="iconbox-small1 at-home1 d-none d-md-block wow fadeInRight">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-md-block wow fadeInLeft">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>+12M</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div>
                <div
                  className="about-img wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <Image
                    height={574}
                    width={691}
                    className="w100 object-fit-contain"
                    src="/images/about/about-1.png"
                    alt="object"
                  />
                </div>
                <div className="imgbox-1 default-box-shadow1 text-center wow fadeInUp">
                  <Image
                    height={68}
                    width={362}
                    className="img-1 bounce-y w-f"
                    src="/images/about/happy-client.png"
                    alt="object"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="text-white mb35">
                ¡Estamos aquí para conectar talento con quienes buscan{" "}
                  <br className="d-none d-lg-block" />  servicios excepcionales!
                </h2>
                <p className="text text-white mb35">
                👩‍🔧 Encuentra a los expertos locales que harán realidad tus proyectos. 
                Desde electricistas y fontaneros hasta diseñadores y chefs privados, 
                nuestro marketplace ofrece una amplia gama de habilidades para satisfacer todas tus necesidades.
                </p>
                <div className="list-style2 light-style">
                  <ul className="mb30">
                    <li>
                      <i className="far fa-check" />
                      Conéctese con autónomos con experiencia empresarial comprobada
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Encuentre el talento perfecto gracias al éxito de un cliente
                      gerente
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Calidad inigualable de trabajos remotos, híbridos y flexibles
                    </li>
                  </ul>
                </div>
                <Link href="/freelancer-3" className="ud-btn btn-light-gray mb25 me-4">
                  Encontrar Talento
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
