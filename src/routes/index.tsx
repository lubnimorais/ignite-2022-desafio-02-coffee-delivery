import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { CompleteOrder } from "../pages/CompleteOrder";
import { LayoutDefault } from "../LayoutDefault";
import { OrderCompleted } from "../pages/OrderCompleted";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete_order" element={<CompleteOrder />} />
        <Route path="/order_confirmed" element={<OrderCompleted />} />
      </Route>
    </Routes>
  )
}

export { Router };