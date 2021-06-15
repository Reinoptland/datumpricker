import React, { useState } from "react";
import Waar from "../components/Waar";
import Wat from "../components/Wat";

export default function Afspraak() {
  const [step, setStep] = useState(1);

  return (
    <div>
      AFSPRAAK
      {step === 1 && (
        <div>
          <Wat />
        </div>
      )}
      {step === 2 && (
        <div>
          <Waar />
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
