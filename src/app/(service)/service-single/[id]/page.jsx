"use client";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb8 from "@/components/breadcumb/Breadcumb8";
import Axios from "axios";
import ServiceDetail1 from "@/components/section/ServiceDetail1";
import TabSection1 from "@/components/section/TabSection1";
import { useEffect, useState } from "react";
import Loading from "@/components/section/Loading";
import { useParams } from "next/navigation";

// export const metadata = {
//   title:
//     "Freeio - Freelance Marketplace React/Next Js Template | Service Single",
// };

export default function ServiceSingle() {

  const { id } = useParams();
  
  const [ singleServicesData, setSingleServicesData ] = useState([])
  const [ singleInfoAboutService, setSingleInfoAboutService ] = useState([])
  const [ singleExtraServices, setSingleExtraServices ] = useState([])
  const [ aptitudes, setAptitudes ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get-services/" + id)
          .then((result) => {
              if(result.status === 200){
                setLoading(false);
                setSingleServicesData(result.data)
                setSingleInfoAboutService(JSON.parse(result.data.infoAboutService))
                setSingleExtraServices(JSON.parse(result.data.extraServices))
                let infoAboutParsed= JSON.parse(result.data.infoAboutService)
                setAptitudes((infoAboutParsed.aptitudes).split(","))
              }
          }).catch(error => {
                setSingleServicesData(error.response.status)
          });
  }, []);

  return (
    <>
      {
      loading === true ? <Loading /> 
      : 
        <>
          <TabSection1 />
          <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
          <Breadcumb8 infouser={ singleServicesData } infoservice={ singleInfoAboutService }/>
          <ServiceDetail1 infoservice={ singleInfoAboutService } infoextraservice={singleExtraServices} aptitudes={aptitudes} imgs={singleServicesData.imageServices}/>
        </>
      }
    </>
  );
}
