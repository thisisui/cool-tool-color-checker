import React, { useEffect, useState } from "react";
import ColorContrastChecker from "color-contrast-checker";

function HomeScreen() {
  const [foreground, setForeground] = useState("#FF0000");
  const [background, setBackground] = useState("#00FF00");
  const [AA, setAA] = useState(false);
  const [AAA, setAAA] = useState(false);

  const ccc = new ColorContrastChecker();

  useEffect(() => {
    calculateRatio(foreground, background);
  }, [foreground, background]);

  const calculateRatio = () => {
    setAA(ccc.isLevelAA(foreground, background));
    setAAA(ccc.isLevelAAA(foreground, background));
  };

  const changeForeground = (e) => {
    setForeground(e.target.value);
  };

  const changeBackground = (e) => {
    setBackground(e.target.value);
  };

  return (
    <header className="App-header">
      <div
        className="App-background"
        style={{
          backgroundImage: `linear-gradient(-75deg, ${background} 0% 50%, ${foreground} 50% 100%)`,
        }}
      ></div>
      <h1>Cool Tool Color Checker</h1>
      <h2>
        AA {AA ? "❤️" : "💔"} - AAA {AAA ? "❤️" : "💔"}
      </h2>
      <div className="row">
        <div className="column">
          <label htmlFor="foreground">Text Color</label>
          <input
            type="color"
            id="foreground"
            value={foreground}
            onChange={changeForeground}
          />
        </div>
        <div className="column">
          <label htmlFor="background">Background Color</label>
          <input
            type="color"
            id="background"
            value={background}
            onChange={changeBackground}
          />
        </div>
      </div>
    </header>
  );
}

export default HomeScreen;
