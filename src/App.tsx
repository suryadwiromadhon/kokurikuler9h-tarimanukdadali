import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Homepage from "./pages/Homepage";
import GaleriSeni from "./pages/GaleriSeni";
import EnglishCorner from "./pages/EnglishCorner";
import MimbarAgama from "./pages/MimbarAgama";
import ScienceInArt from "./pages/ScienceInArt";
import TarianAngka from "./pages/TarianAngka";
import LemburKuring from "./pages/LemburKuring";
import TimKreator from "./pages/TimKreator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/galeri-seni" element={<GaleriSeni />} />
            <Route path="/english-corner" element={<EnglishCorner />} />
            <Route path="/mimbar-agama" element={<MimbarAgama />} />
            <Route path="/science-in-art" element={<ScienceInArt />} />
            <Route path="/tarian-angka" element={<TarianAngka />} />
            <Route path="/lembur-kuring" element={<LemburKuring />} />
            <Route path="/tim-kreator" element={<TimKreator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
