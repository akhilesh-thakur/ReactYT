import react from "react";

export default function InputOutput() {
  const [input, setinput] = useState("blank");

  const inputOutput = useRef(null);

  const click = () => {
    setinput(inputOutput.current.value);
  };

  return (
    <>
      <div>
        <input ref={inputOutput} type="text" />
        <button onClick={click}>Submit</button>
        <h3>{input}</h3>
      </div>
    </>
  );
}
