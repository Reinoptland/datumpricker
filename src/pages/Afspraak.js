import React, { useState } from "react";
import Overzicht from "../components/Overzicht";
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
      {step === 3 && (
        <div>
          <Overzicht />
        </div>
      )}
      <button onClick={() => setStep(step - 1)} disabled={step === 1}>
        Vorige stap
      </button>
      <button onClick={() => setStep(step + 1)} disabled={step === 3}>
        Volgende stap
      </button>
    </div>
  );
}
