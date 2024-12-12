import type { NoteFormProps } from "./types";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
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
import FormInput from "../Inputs/FormInput/FormInput";
import FormTextarea from "../Inputs/FormTextarea/FormTextarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const AddNoteForm = ({ onCancel, onSubmit, note }: NoteFormProps) => {
  const [isOpen, setIsOpen] = useState(!!note);
  const { reset, ...rest } = useForm<FormSchemaType>({
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

  const handleSubmit = (values: FormSchemaType): undefined => {
    onSubmit(values);
  };

  const onOpenChange = (state: boolean) => {
    if (isOpen) onCancel();
    setIsOpen(state);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
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
            <FormInput<FormSchemaType>
              control={rest.control}
              name="title"
              placeholder="Note title..."
            />
            <FormTextarea<FormSchemaType>
              control={rest.control}
              name="text"
              placeholder="Note text..."
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
