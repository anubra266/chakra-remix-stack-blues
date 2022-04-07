import { ChakraRemixLink } from "~/components/factory";

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <ChakraRemixLink to="new" color="blue.500" textDecor="underline">
        create a new note.
      </ChakraRemixLink>
    </p>
  );
}
