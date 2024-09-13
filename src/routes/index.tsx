import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HistoryPage,
  HomePage,
  LaunchDetailPage,
  LaunchesPage,
  RocketDetailPage,
  RocketsPage,
} from "../pages";
import PageLayout from "../layout/PageLayout";

const AppRouter = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rockets" element={<RocketsPage />} />
          <Route path="/rockets/:id" element={<RocketDetailPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/launches" element={<LaunchesPage />} />
          <Route path="/launches/:id" element={<LaunchDetailPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default AppRouter;
