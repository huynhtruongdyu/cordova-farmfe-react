import { useAppearanceCtx } from "../features/theming/providers";

const HomePage = () => {
  console.log("HomePage");
  const { setCurrentTheme } = useAppearanceCtx();
  return (
    <div>
      <button onClick={() => setCurrentTheme("light")}>light</button>
      <button onClick={() => setCurrentTheme("dark")}>dark</button>
    </div>
  );
};

export default HomePage;
