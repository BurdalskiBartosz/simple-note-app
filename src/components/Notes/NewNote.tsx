import { Check, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Note, NoteHandlers, PartialNote } from "./types";

type NoteProps = {
  note: Note;
  selected: PartialNote | null;
} & NoteHandlers;

type CardProps = React.ComponentProps<typeof Card> & NoteProps;

const NewNote = ({
  className,
  note,
  onDeleteCard,
  onSelectCard,
  selected,
  ...props
}: CardProps) => {
  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onDeleteCard(note.id);
  };
  return (
    <Card
      onClick={() => onSelectCard(note)}
      className={cn(
        {
          "bg-green-800 text-white border-green-700": selected?.id === note.id,
        },
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{note.title}</CardTitle>
          <Button onClick={onDelete} variant={"outline"}>
            <Trash />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{note.text}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={onDelete} className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewNote;
