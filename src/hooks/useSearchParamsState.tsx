import { useSearchParams } from "react-router-dom";

export function useSearchParamsState(
  searchParamName: string,
  defaultValue: string
): [paramsState: string, setParamsState: (newState: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const paramsState = acquiredSearchParam ?? defaultValue;

  const setParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {}
      ),
      { [searchParamName]: newState }
    );
    setSearchParams(next);
  };
  return [paramsState, setParamsState];
}
