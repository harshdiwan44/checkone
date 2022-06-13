import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Harsh from "./components/Home";
import Loader from "./components/Shared/loader";

export default function App() {
  return (
    <>
      <Loader />
      <div className="container mt-2">
        <Harsh />
      </div>
    </>
  );
}
