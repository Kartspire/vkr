import { Main } from "./routes/Main";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./routes/Contacts";
import { NotFound } from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
