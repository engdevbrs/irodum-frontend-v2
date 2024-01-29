import AllTimeSelling from "../element/AllTimeSelling";

export default function NeedSomething1() {
  return (
    <>
      <section className="our-features pb90">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title text-center">
                <h2>¿Necesitas ayuda con tareas del hogar, <br /> reparaciones o proyectos especiales? </h2>
                <p className="text">
                Servicios más vistos y más vendidos de todos los tiempos
                </p>
              </div>
            </div>
          </div>
          <AllTimeSelling />
        </div>
      </section>
    </>
  );
}
