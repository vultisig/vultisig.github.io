import { FC, useEffect, useRef, useState } from "react";

interface ComponentProps {
  text: string;
}

interface InitialState {
  counter: number;
  ellipsis: string;
  truncating: boolean;
}

const Component: FC<ComponentProps> = ({ text }) => {
  const initialState: InitialState = {
    counter: 0,
    ellipsis: "",
    truncating: true,
  };
  const [state, setState] = useState(initialState);
  const { counter, ellipsis, truncating } = state;
  const elmRef = useRef<HTMLSpanElement>(null);

  const ellipsisDidUpdate = (): void => {
    if (elmRef.current) {
      const [child] = elmRef.current.children;
      const parentWidth = elmRef.current.clientWidth;
      const childWidth = child?.clientWidth ?? 0;
      
      console.log("childWidth",childWidth);
      if (childWidth > parentWidth) {
        const chunkLen = Math.ceil(text.length / 2) - counter;

        setState((prevState) => ({
          ...prevState,
          counter: counter + 1,
          ellipsis: `${text.slice(0, chunkLen)}...${text.slice(chunkLen * -1)}`,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          counter: 0,
          truncating: false,
        }));
      }
    }
  };

  const componentDidUpdate = (): void => {
    setState({ ...initialState, ellipsis: text });
  };

  const componentDidMount = () => {
    window.addEventListener("resize", componentDidUpdate);

    return () => {
      window.removeEventListener("resize", componentDidUpdate);
    };
  };

  useEffect(ellipsisDidUpdate, [ellipsis,truncating]);
  useEffect(componentDidUpdate, [text]);
  useEffect(componentDidMount, []);

  return (
    <span
      ref={elmRef}
      className="middle-truncate"
      style={{ display: "block", position: "relative" }}
    >
      {truncating ? (
        <span style={{ position: "absolute", visibility: "hidden" }}>
          {ellipsis}
        </span>
      ) : (
        ellipsis
      )}
    </span>
  );
};

export default Component;
