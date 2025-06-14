import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ColorPicker } from '@/components/ui/color-picker.tsx';
import { useColor } from '@/context/ColorContext.tsx';
import ColorSquare from '@/components/ui/ColorSquare.tsx';
import ColorPallet from '@/components/section/ColorPallet.tsx';
import KeyboardSelector from '@/components/section/KeyboardSelector.tsx';

const ConfigurationTab: React.FC = () => {
  const { color, setColor, recentColors } = useColor();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Configurator</CardTitle>
          <CardDescription>This is a keyboard configurator</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" defaultValue="keyboard-config" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
      <KeyboardSelector />
      <Card className="mt-3">
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
              <ColorSquare key={index} value={recentColor} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Suggested Color Pallets</CardTitle>
          <CardDescription>Click on the color to select it</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="space-y-1 flex row space-x-4">
            <Label className="w-[30%]">Cyberpunk</Label>
            <ColorPallet
              colorList={['#00ff9f', '#00b8ff', '#001eff', '#bd00ff']}
            />
          </div>
          <div className="space-y-1 flex row space-x-4">
            <Label className="w-[30%]">Cappuccino</Label>
            <ColorPallet
              colorList={['#4b3832', '#854442', '#3c2f2f', '#fff4e6']}
            />
          </div>
          <div className="space-y-1 flex row space-x-4">
            <Label className="w-[30%]">Teal</Label>
            <ColorPallet
              colorList={['#b2d8d8', '#66b2b2', '#006666', '#004c4c']}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ConfigurationTab;
