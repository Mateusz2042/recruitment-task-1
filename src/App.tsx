import { Page, Navigation, Main, Search, Footer, CTA } from "./ui";
import Moods from "./components/Moods";
import { Outlet } from "react-router-dom";
import { useGetMoods } from "./hooks/moods";

export default function App() {
  const { moodsResult, count, search, nextPageDisabled, previousPageDisabled, handleSearchUpdate, handleNext, handlePrevious, sendMoods } = useGetMoods();

  return (
    <Page>
      <div className="py-6">
        <h2 className="text-3xl font-bold">Mood selector</h2>
        <span className="text-sm text-neutral-500">
          Select 3 moods that bests describe your feeling
        </span>
      </div>
      <Search value={search} onChange={handleSearchUpdate} />
      <Main>
        <Outlet />
        <Moods moodsResult={moodsResult} />
      </Main>
      <Footer>
        <Navigation count={count} isPreviousDisabled={previousPageDisabled} isNextDisabled={nextPageDisabled} onNext={handleNext} onPrevious={handlePrevious} />
        <CTA onSend={sendMoods} />
      </Footer>
    </Page>
  );
}
