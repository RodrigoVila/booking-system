import { QueryClient, QueryClientProvider } from "react-query";
import { Button } from "./components/Button";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <div className=" flex h-screen w-full items-center justify-center  bg-green-800 text-white">
        <Button>asdasd</Button>
      </div>
    </QueryClientProvider>
  );
};

export default App;
