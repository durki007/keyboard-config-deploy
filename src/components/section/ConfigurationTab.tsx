import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Label } from '@/components/ui/label.tsx';
import { ColorPicker } from '@/components/ui/color-picker.tsx';
import { useColor } from '@/context/ColorContext.tsx';
import ColorSquare from '@/components/ui/ColorSquare.tsx';
import ColorPallet from '@/components/section/ColorPallet.tsx';
import KeyboardSelector from '@/components/section/KeyboardSelector.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';

const ConfigurationTab: React.FC = () => {
  const {
    color,
    setColor,
    recentColors,
    backlightColor,
    setBacklightColors,
    recentBacklightColors,
  } = useColor();

  return (
    <ScrollArea className="h-full">
      <div className="space-y-3 p-1">
        {/*<Card>*/}
        {/*  <CardHeader>*/}
        {/*    <CardTitle>Configurator</CardTitle>*/}
        {/*    <CardDescription>This is a keyboard configurator</CardDescription>*/}
        {/*  </CardHeader>*/}
        {/*  <CardContent className="space-y-2">*/}
        {/*    <div className="space-y-1">*/}
        {/*      <Label htmlFor="name">Project Name</Label>*/}
        {/*      <Input id="name" defaultValue="keyboard-config" />*/}
        {/*    </div>*/}
        {/*  </CardContent>*/}
        {/*  <CardFooter>*/}
        {/*    <Button>Save changes</Button>*/}
        {/*  </CardFooter>*/}
        {/*</Card>*/}

        <KeyboardSelector />

        <Card>
          <CardHeader>
            <CardTitle>Color picker</CardTitle>
            <CardDescription>Choose color of the keys</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Color</Label>
              <ColorPicker onChange={(v) => setColor(v)} value={color} />
            </div>
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Recent</Label>
              {recentColors.map((recentColor, index) => (
                <ColorSquare
                  key={index}
                  value={recentColor}
                  setColor={setColor}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backlight color picker</CardTitle>
            <CardDescription>
              Choose color of the keys backlight
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Backlight</Label>
              <ColorPicker
                onChange={(v) => setBacklightColors(v)}
                value={backlightColor}
              />
            </div>
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Recent</Label>
              {recentBacklightColors.map((recentColor, index) => (
                <ColorSquare
                  key={index}
                  value={recentColor}
                  setColor={setBacklightColors}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suggested Color Pallets</CardTitle>
            <CardDescription>Click on the color to select it</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Cyberpunk</Label>
              <ColorPallet
                colorList={['#00ff9f', '#00b8ff', '#001eff', '#bd00ff']}
                setColor={setColor}
              />
            </div>
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Cappuccino</Label>
              <ColorPallet
                colorList={['#4b3832', '#854442', '#3c2f2f', '#fff4e6']}
                setColor={setColor}
              />
            </div>
            <div className="space-y-1 flex row space-x-4">
              <Label className="w-[30%]">Teal</Label>
              <ColorPallet
                colorList={['#b2d8d8', '#66b2b2', '#006666', '#004c4c']}
                setColor={setColor}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default ConfigurationTab;
