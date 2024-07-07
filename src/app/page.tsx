
import Section from "./components/Section";
import data from "../homedata/homeData"

export default function Home() {
 



  
  return (
    <>
      <div className="container overflow-scroll mx-auto">
        <div className="main-data mb-20">
          <Section data={data} />

        </div>

      </div>

    </>
  )
}


