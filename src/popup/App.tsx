import { Buttons } from "@/components/buttons/buttons";
import { Status } from "@/features/status/components/Status";
import { MainLayout } from "@/Layout/MainLayout";
import { useBrowsertStore } from "@/stores/browser.store";

export const App = () => {
  const fetchCurrentUrl = useBrowsertStore((state) => state.fetchCurrentPage);
  fetchCurrentUrl();

  return (
    <MainLayout>
      <Status />
      <Buttons />
    </MainLayout>
  );
};
