import { KeyboardModel, Verge3DConfig } from '@/types/types.ts';

export const keyboardStrategy = (
  keyboardModel: KeyboardModel
): Verge3DConfig => {
  if (!keyboardModel) {
    throw new Error('KeyboardModel cannot be undefined');
  }

  switch (keyboardModel) {
    case KeyboardModel.hyperX: {
      console.log(`KeyboardModel set to hyperX`);

      if (import.meta.env.VITE_HYPERX_SCENE_URL === undefined)
        throw new Error('Scene URL cannot be undefined');
      const sceneUrl = import.meta.env.VITE_HYPERX_SCENE_URL;

      if (import.meta.env.VITE_HYPERX_DEFAULT_PALLET === undefined)
        throw new Error('Default color pallet cannot be undefined');
      const defaultColorPallet =
        import.meta.env.VITE_HYPERX_DEFAULT_PALLET.split(',');

      return {
        sceneUrl,
        defaultColorPallet,
      };
    }
    case KeyboardModel.logitech: {
      console.log(`KeyboardModel set to logitech`);

      if (import.meta.env.VITE_LOGITECH_SCENE_URL === undefined)
        throw new Error('Scene URL cannot be undefined');
      const sceneUrl = import.meta.env.VITE_LOGITECH_SCENE_URL;

      if (import.meta.env.VITE_LOGITECH_DEFAULT_PALLET === undefined)
        throw new Error('Default color pallet cannot be undefined');
      const defaultColorPallet =
        import.meta.env.VITE_LOGITECH_DEFAULT_PALLET.split(',');

      return {
        sceneUrl,
        defaultColorPallet,
      };
    }
    case KeyboardModel.aliExpress: {
      console.log(`KeyboardModel set to aliExpress`);

      if (import.meta.env.VITE_ALIEXPRESS_SCENE_URL === undefined)
        throw new Error('Scene URL cannot be undefined');
      const sceneUrl = import.meta.env.VITE_ALIEXPRESS_SCENE_URL;

      if (import.meta.env.VITE_ALIEXPRESS_DEFAULT_PALLET === undefined)
        throw new Error('Default color pallet cannot be undefined');
      const defaultColorPallet =
        import.meta.env.VITE_ALIEXPRESS_DEFAULT_PALLET.split(',');

      return {
        sceneUrl,
        defaultColorPallet,
      };
    }
  }
};
