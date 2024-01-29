"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import perfil from '../../../public/images/team/client-1.png'

export default function PopularServiceSlideCard2({ data }) {
  const { infoAboutService,  extraServices} = data
  const infoService = JSON.parse(infoAboutService)
  let imageServicesToString = Buffer.from(data.imageServices)
  let serviceImg = JSON.parse(imageServicesToString)

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
        <div className="list-thumb flex-shrink-0">
          <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid">
            {showSwiper && (
              <Swiper
                navigation={{
                  prevEl: ".btn__prev__018",
                  nextEl: ".btn__next__018",
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                loop={true}
                pagination={{
                  el: ".swiper__pagination__018",
                  clickable: true,
                }}
              >
                {serviceImg?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      height={245}
                      width={329}
                      className="w-100 h-100 object-fit-cover"
                      src={`http://localhost:3001/${item.originalname}`}
                      alt="thumbnail"
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper__parent">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <button className="swiper__btn swiper__btn-2 btn__prev__018">
                        <i className="far fa-arrow-left-long" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <div className="swiper__pagination swiper__pagination-2 swiper__pagination__018"></div>
                    </div>
                    <div className="col-auto">
                      <button className="swiper__btn swiper__btn-2 btn__next__018">
                        <i className="far fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
              </Swiper>
            )}
          </div>
        </div>
        <div className="list-content flex-grow-1 ms-1">
          <a className="listing-fav fz12">
            <span className="far fa-heart" />
          </a>
          <p className="list-text body-color fz14 mb-1">{infoService.category}</p>
          <h5 className="list-title">
            <Link href={`/service-single/${data.idServices}`}>{infoService.titlebasic}</Link>
          </h5>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rankingUser}</span>
              {data.review}
              reviews
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <a>
              <span className="position-relative mr10">
                <Image
                  height={30}
                  width={30}
                  className="rounded-circle object-fit-contain"
                  src={data.photoUser ? `http://localhost:3001/api/images/${data.photoUser}` : perfil}
                  alt="Freelancer Photo"
                />
                <span className="online-badge" />
              </span>
              <span className="fz14">{data.nameUser}</span>
            </a>
            <div className="budget">
              <p className="mb-0 body-color">
                Starting at
                <span className="fz17 fw500 dark-color ms-1">
                  ${infoService.pricebasic}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
