import "./styles/fonts.css";
import Insights from "./components/insights";
import { ERROR_MESSAGE, LOADING_MESSAGE } from "./lib/constants";
import useReport from "./lib/hooks/useReport";

function App() {
  const { data, fetching } = useReport();

  if (fetching) {
    return <h1>{LOADING_MESSAGE}</h1>;
  }

  return data ? <Insights data={data} /> : <h1>{ERROR_MESSAGE}</h1>;
}

export default App;
