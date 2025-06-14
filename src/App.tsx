import Home from '@/pages/Home.tsx';
import { ColorProvider } from '@/context/ColorContext.tsx';
import { KeyboardProvider } from '@/context/KeyboardContext.tsx';

function App() {
  return (
    <ColorProvider>
      <KeyboardProvider>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <Home />
        </div>
      </KeyboardProvider>
    </ColorProvider>
  );
}

export default App;
