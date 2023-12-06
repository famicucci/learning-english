import { useEffect, useState } from "react";

interface UseAvoidFirstRenderProps {
  callBack: () => void;
}

export default function useAvoidFirstRender(props: UseAvoidFirstRenderProps) {
  const [initialized, setInitialized] = useState(false);
  const { callBack } = props;

  useEffect(() => {
    if (initialized) {
      callBack();
    } else {
      console.log("First render");
      setInitialized(true);
    }
  }, [callBack]);

  return { initialized };
}
