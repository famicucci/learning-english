import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  // falta implementar
  const getQueryParams = (keyCandidates: [string, string][]) => {
    const arrParams = keyCandidates.map(([key, value], i) => {
      // if(key === currentKey) return `?${key}=${currentValue}`;
      if (i === 0) return `?${key}=${value}`;
      return `&${key}=${value}`;
    });
    // console.log(arrParams.join(""));
    // console.log(arrParams);
    return arrParams.join("");
  };

  const keyCandidates = Array.from(searchParams.entries());
  const queries = getQueryParams(keyCandidates);
  console.log(queries);
  return <div>Page</div>;
}
