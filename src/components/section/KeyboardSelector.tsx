import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Controller, useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useKeyboard } from '@/context/KeyboardContext.tsx';
import { KeyboardModel } from '@/types/types.ts';

const FormSchema = z.object({
  keyboardModel: z.nativeEnum(KeyboardModel, {
    required_error: 'Please select a keyboard model to customise.',
  }),
});

const KeyboardSelector: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      keyboardModel: KeyboardModel.hyperX,
    },
  });

  const { setKeyboardModel } = useKeyboard();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setKeyboardModel(data.keyboardModel);
    console.log(`New Keyboard model set to: ${data.keyboardModel}`);
  }

  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle>Keyboard Model</CardTitle>
        <CardDescription>
          Select keyboard model and save changes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              control={form.control}
              name="keyboardModel"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[80%]">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HyperX">HyperX</SelectItem>
                    <SelectItem value="Logitech">Logitech</SelectItem>
                    <SelectItem value="AliExpress">Aliexpress</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Button type="submit">Save changes</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default KeyboardSelector;
