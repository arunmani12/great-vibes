import "./App.css";
import JobPost from "./components/card/JobPost";
import React, { useState, useEffect } from "react";
import axios from "axios";
import JdForm from "./components/jdform/JdForm";
import Loading from "./components/loader/Loading";

function App() {
  const [modelIsOpen, setModelIsopen] = useState(false);
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    (function fetchData() {
      setLoading(true)
      axios
        .get("https://640c507394ce1239b0aa0b08.mockapi.io/jd")
        .then((res) => {
          setLoading(false)
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
        });
    })();
  }, []);


  return (
    <section className="flex flex-col  items-center w-full h-screen ">
      {!modelIsOpen ? (
        <>
          <nav className="flex shadow w-full h-16 justify-end px-6 fixed top-0 left-0 bg-card">
            <button
              className="bg-white border my-2 border-primary-color text-primary-color font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setModelIsopen((prv) => !prv)}
            >
              Create
            </button>
          </nav>
          <div className="w-full h-screen  mt-28 flex flex-col items-center">
            {loading && <Loading/>}
            {!loading && data.map((d, i) => (
              <JobPost
                key={i}
                jobTitle={d.jobTitle}
                companyName={d.companyName}
                industry={d.industry}
                location={d.location}
                remoteType={d.remoteType}
                experienceMin={d.experienceMin}
                experienceMax={d.experienceMax}
                salaryMin={d.salaryMin}
                salaryMax={d.salaryMax}
                totalEmployee={d.totalEmployee}
                applyType={d.applyType}
              />
            ))}
          </div>
        </>
      ) : (
        <JdForm setModelIsopen={setModelIsopen} setData={setData}/>
      )}
    </section>
  );
}

export default App;
