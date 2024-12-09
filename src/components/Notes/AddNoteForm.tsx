import type { NoteFormProps } from "./types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const AddNoteForm = ({ onCancel, onSubmit }: NoteFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  useEffect(() => {
    form.reset();
  }, [form]);

  const handleSubmit = (values: z.infer<typeof formSchema>): undefined => {
    onSubmit(values);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5 items-start "
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <h3 className="font-bold text-xl">Add new note</h3>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 text-sm font-bold ">
                Note title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Note title..."
                  className="rounded text-white"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 text-sm font-bold ">
                Note text
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Note text..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-5">
          <Button onClick={onCancel} type="button" variant="destructive">
            Cancel
          </Button>

          <Button variant="secondary" type="submit">
            New Note
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddNoteForm;
