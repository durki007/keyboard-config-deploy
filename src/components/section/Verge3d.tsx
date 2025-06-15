import { useEffect, useRef, useState } from 'react';
import { createApp } from '@/lib/v3dApp/app';
import '@/lib/v3dApp/app.css';
import { useColor } from '@/context/ColorContext.tsx';
import { useKeyboard } from '@/context/KeyboardContext.tsx';
import { keyboardStrategy } from '@/utils/keyboard-strategy.ts';

const V3DApp = () => {
  const { color, backlightColor } = useColor();
  const { keyboardModel } = useKeyboard();

  const [uuid, setUuid] = useState(() => crypto.randomUUID());

  useEffect(() => {
    setUuid(crypto.randomUUID());
  }, [keyboardModel]);

  const containerId = `v3d-container-${uuid}`;
  const fsButtonId = `fullscreen-button-${uuid}`;
  const sceneURL = keyboardStrategy(keyboardModel)?.sceneUrl;

  const appRef = useRef<any>(null);
  const PLRef = useRef<any>(null);

  const loadApp = async () => {
    try {
      const { app, PL } = await createApp({
        containerId,
        fsButtonId,
        sceneURL,
      });
      appRef.current = app;
      PLRef.current = PL;
      console.log(`App created`);
    } catch (e) {
      console.error(e);
    }
  };

  const disposeApp = () => {
    appRef.current?.dispose?.();
    PLRef.current?.dispose?.();
    appRef.current = null;
    PLRef.current = null;
  };

  useEffect(() => {
    if (!sceneURL) return;

    loadApp();
    return () => {
      disposeApp();
    };
  }, [uuid]);

  useEffect(() => {
    console.log(`Color has changed to: ${color}`);
  }, [color]);

  return (
    <div id={containerId}>
      <div
        id={fsButtonId}
        className="fullscreen-button fullscreen-open"
        title="Toggle fullscreen mode"
      />
      <input type="color" id="color-changer" hidden value={color} readOnly />
      <input
        type="color"
        id="backlight-changer"
        hidden
        value={backlightColor}
        readOnly
      />
    </div>
  );
};

export default V3DApp;
