import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { CategoryPageLayout } from "./pages/category/CategoryPageLayout";
import { DashboardPageLayout } from "./pages/dashboard/DashboardPageLayout";
import { MezmurPageLayout } from "./pages/mezmur/MezmurPageLayout";
import { SingerPageLayout } from "./pages/singer/SingerPageLayout";
import { SubCategoryPageLayout } from "./pages/subcategory/SubCategoryPageLayout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPageLayout />} />
          <Route path="category" element={<CategoryPageLayout />} />
          <Route path="sub-category" element={<SubCategoryPageLayout />} />
          <Route path="mezmurs" element={<MezmurPageLayout />} />
          <Route path="singers" element={<SingerPageLayout />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
