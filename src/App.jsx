import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Quiz/Home";

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen flex flex-col transition-all 
          bg-[#F8F9FA] text-gray-900"> {/* Light background with dark text */}
        
        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-4 md:px-8">
          <Home />
        </div>
      </main>
    </Router>
  );
}

export default App;
