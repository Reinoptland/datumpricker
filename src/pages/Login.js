import React from "react";
import Waar from "../components/Waar";

export default function Login(props) {
  const { locatie, setLocatie } = props;
  return (
    <div>
      LOGIN
      <Waar locatie={locatie} setLocatie={setLocatie} />
    </div>
  );
}
