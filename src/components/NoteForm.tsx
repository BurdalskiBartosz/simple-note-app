import { ChangeEvent, FormEvent } from "react";
import { PartialNote } from "../types/Notes";

type FormProps = {
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (note: PartialNote) => void;
  note: PartialNote;
};

const Form = (props: FormProps) => {
  const { note, onCancel, onChange, onSubmit } = props;

  const handleSubmit = (
    event: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <p>Title</p>
        <input name="title" value={note?.title ?? ""} onChange={onChange} />
      </div>
      <div>
        <p>Text</p>
        <input name="text" value={note?.text ?? ""} onChange={onChange} />
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        onSubmit={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
