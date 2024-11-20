import type { FormEvent } from "react";
import Button from "../Button/Button";
import type { NoteFormProps } from "./types";

const Form = ({ note, onCancel, onChange, onSubmit }: NoteFormProps) => {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement | HTMLButtonElement>
  ): undefined => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newNote = {
      id: note?.id ?? undefined,
      title: formData.get("title") as string,
      text: formData.get("text") as string,
    };

    onSubmit(newNote);
  };
  return (
    <form className="flex flex-col gap-5 items-start " onSubmit={handleSubmit}>
      <h3 className="font-bold text-xl">Add new note</h3>
      <div className="mb-4">
        <label
          className="block text-gray-300 text-sm font-bold mb-2"
          htmlFor="noteTitle"
        >
          Note title
        </label>
        <input
          name="title"
          value={note?.title ?? ""}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="noteTitle"
          type="text"
          placeholder="New note..."
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-300 text-sm font-bold mb-2"
          htmlFor="noteText"
        >
          Note text
        </label>
        <input
          name="text"
          value={note?.text ?? ""}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="noteText"
          type="text"
          placeholder="Note text..."
        />
      </div>

      <div className="flex gap-5">
        <Button onClick={onCancel} type="danger">
          Cancel
        </Button>

        <Button isSubmitButton>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
