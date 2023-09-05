import { useState } from "react";
import { Primary, Values } from "./styles";

export function App() {
  const [sample, setSample] = useState("");
  const [pop, setPop] = useState("");
  let [result, setResult] = useState(0);

  const percent = 1.96
  // const what = 0.25;

  function handleMaths() {
    result = 100 * (percent * (parseFloat(pop) / Math.sqrt(parseFloat(sample))));
    // result = Math.sqrt((what)(percent))
    setResult(result);
  }
  return (
    <Primary>
      <Values>
        <span>Amostra</span>
        <input
          type="number"
          placeholder="Insira o valor"
          required
          onChange={(v) => setSample(v.target.value)}
        />
      </Values>

      <Values>
        <span>População</span>
        <input
          type="number"
          placeholder="Insira o valor"
          required
          onChange={(v) => setPop(v.target.value)}
        />
      </Values>

      <button onClick={handleMaths}>Calcular</button>

      <span>Resultado: {result}</span>
    </Primary>
  );
}
