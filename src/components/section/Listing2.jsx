"use client";
import { product1 } from "@/data/product";
import ListingOption1 from "../element/ListingOption1";
import ListingSidebarModal1 from "../modal/ListingSidebarModal1";
import Pagination1 from "./Pagination1";
import listingStore from "@/store/listingStore";
import priceStore from "@/store/priceStore";
import PopularServiceCard2 from "../card/PopularServiceCard2";
import PopularServiceSlideCard2 from "../card/PopularServiceSlideCard2";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Listing2() {

  const [ servicesData, setServicesData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const getPriceRange = priceStore((state) => state.priceRange);
  const getLevel = listingStore((state) => state.getLevel);
  const getLocation = listingStore((state) => state.getLocation);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getDesginTool = listingStore((state) => state.getDesginTool);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getSearch = listingStore((state) => state.getSearch);

  // delivery filter
  const deliveryFilter = (item) =>
    getDeliveryTime === "" || getDeliveryTime === "anytime"
      ? item
      : item.deliveryTime === getDeliveryTime;

  // price filter
  const priceFilter = (item) =>
    getPriceRange.min <= item.price && getPriceRange.max >= item.price;

  // level filter
  const levelFilter = (item) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // location filter
  const locationFilter = (item) =>
    getLocation?.length !== 0 ? getLocation.includes(item.location) : item;

  const searchFilter = (item) =>
    getSearch !== ""
      ? item.location.split("-").join(" ").includes(getSearch.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  // design tool filter
  const designToolFilter = (item) =>
    getDesginTool?.length !== 0 ? getDesginTool.includes(item.tool) : item;

  // speak filter
  const speakFilter = (item) =>
    getSpeak?.length !== 0 ? getSpeak.includes(item.language) : item;

    useEffect(() => {
      Axios.get("http://localhost:3001/api/get-all-services")
                    .then((result) => {
                        if(result.status === 200){
                          setLoading(false);
                          setServicesData(result.data)
                        }
                    }).catch(error => {
                          setServicesData(error.response.status)
                    });
    }, []);

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingOption1 />
          <div className="row">
            {servicesData
              .slice(0, 12)
              // .filter(deliveryFilter)
              // .filter(priceFilter)
              // .filter(levelFilter)
              // .filter(locationFilter)
              // .filter(searchFilter)
              // .filter(sortByFilter)
              // .filter(designToolFilter)
              // .filter(speakFilter)
              .map((item,i) => {
                let imageServicesToString = Buffer.from(item.imageServices)
                let serviceImg = JSON.parse(imageServicesToString)
                return(
                  (
                    <div key={ i } className="col-sm-6">
                      {serviceImg?.length > 0 ? (
                        <PopularServiceSlideCard2 data={item} />
                      ) : (
                        <PopularServiceCard2 data={item} />
                      )}
                    </div>
                  )
                )
              })}
          </div>
          <Pagination1 />
        </div>
      </section>
      <ListingSidebarModal1 />
    </>
  );
}