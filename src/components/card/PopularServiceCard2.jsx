"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PopularServiceCard2({ data, text1 = false }) {
  const { infoAboutService,  extraServices} = data
  const infoService = JSON.parse(infoAboutService)
  let imageServicesToString = Buffer.from(data.imageServices)
  let serviceImg = JSON.parse(imageServicesToString)

  const [isFavActive, setFavActive] = useState(false);
  const path = usePathname();

  return (
    <>
      <div className="listing-style1 listi-style2 d-block d-xl-flex">
        <div className="list-thumb flex-shrink-0">
          <Image
            height={245}
            width={329}
            className="w-100 h-100 object-fit-cover"
            src={`http://localhost:3001/${serviceImg.originalname}`}
            alt="image"
          />
        </div>
        <div className="list-content flex-grow-1 ms-1">
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
          <p className="list-text body-color fz14 mb-1">{infoService.category}</p>

          <h5 className="list-title">
            <Link href={`/service-single/${data.idServices}`}>{infoService.titlebasic}</Link>
          </h5>
          {text1 && (
            <p className="list-text body-color fz15 mb-1">
              I can assist you in designing clean and minimal UI UX for your
              website in Adobe XD or <br /> Figma.
            </p>
          )}

          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review} reviews
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
                  src={`http://localhost:3001/${data.photoUser}`}
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
