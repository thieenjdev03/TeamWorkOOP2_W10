import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Property from "../components/Property";
import ListProperty from "../components/ListProperty";
import FullContract from "../components/FullContract";
import ListFullContract from "../components/ListFullContract";

export default function RouteFontEnd() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property />} />
      <Route path="/ListProperty" element={<ListProperty />} />
      <Route path="/FullContract" element={<FullContract />} />
      <Route path="/ListFullContract" element={<ListFullContract />} />
    </Routes>
  );
}
