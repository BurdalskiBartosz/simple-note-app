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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const AddNoteForm = ({ onCancel, onSubmit, note }: NoteFormProps) => {
  const [isOpen, setIsOpen] = useState(!!note);
  const { reset, ...rest } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: note?.title ?? "",
      text: note?.text ?? "",
    },
  });

  useEffect(() => {
    reset({ title: note?.title ?? "", text: note?.text ?? "" });
    setIsOpen(!!note);
  }, [note, reset]);

  const handleSubmit = (values: z.infer<typeof formSchema>): undefined => {
    onSubmit(values);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new note</SheetTitle>
          <SheetDescription>Fill the form and save your note.</SheetDescription>
        </SheetHeader>
        <Form {...rest} reset={reset}>
          <form
            className="flex flex-col gap-5 items-start "
            onSubmit={rest.handleSubmit(handleSubmit)}
          >
            <h3 className="font-bold text-xl">Add new note</h3>
            <FormField
              control={rest.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-sm font-bold ">
                    Note title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Note title..."
                      className="rounded"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={rest.control}
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

            <SheetFooter>
              <SheetClose asChild>
                <Button onClick={onCancel} type="button" variant="destructive">
                  Cancel
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="secondary" type="submit">
                  New Note
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddNoteForm;
