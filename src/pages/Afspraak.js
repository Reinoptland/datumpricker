import React, { useState } from "react";
import Waar from "../components/Waar";
import Wat from "../components/Wat";

export default function Afspraak() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [locatie, setLocatie] = useState("");

  return (
    <div>
      AFSPRAAK
      {step === 1 && (
        <div>
          <Wat
            title={title}
            setTitle={setTitle}
            type={type}
            setType={setType}
            description={description}
            setDescription={setDescription}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <Waar locatie={locatie} setLocatie={setLocatie} />
        </div>
      )}
      <button onClick={() => setStep(step - 1)} disabled={step === 1}>
        Vorige stap
      </button>
      <button onClick={() => setStep(step + 1)} disabled={step === 2}>
        Volgende stap
      </button>
    </div>
  );
}
