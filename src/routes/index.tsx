import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { CompleteOrder } from "../pages/CompleteOrder";
import { LayoutDefault } from "../LayoutDefault";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete_order" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}

export { Router };