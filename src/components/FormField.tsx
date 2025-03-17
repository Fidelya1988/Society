"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
interface IFormFieldProps {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;

}
const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .optional(),
});

export default function FormFieldTemplate({ name, label, placeholder}: IFormFieldProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
          <FormField
            // control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                {label &&<FormLabel> {label} </FormLabel>}
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title </FormLabel>
                <FormControl>
                  <Input placeholder="type title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description </FormLabel>
                <FormControl>
                  <Textarea placeholder="type short description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit"> Submit </Button>
        </form>
      </Form>
    </div>
  );
}
