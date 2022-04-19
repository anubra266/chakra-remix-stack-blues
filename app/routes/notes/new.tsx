import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/services/session.server";

type ActionData = {
  errors?: {
    title?: string;
    body?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");

  if (typeof title !== "string" || title.length === 0) {
    return json<ActionData>(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json<ActionData>(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  const note = await createNote({ title, body, userId });

  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  const actionData = useActionData() as ActionData | undefined;
  const titleRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <FormControl isInvalid={actionData?.errors?.title ? true : undefined}>
        <FormLabel className="flex w-full flex-col gap-1">
          <span>Title: </span>
        </FormLabel>
        <Input
          ref={titleRef}
          name="title"
          className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
        <FormErrorMessage>{actionData?.errors?.title}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={actionData?.errors?.body ? true : undefined}>
        <FormLabel>Body</FormLabel>
        <Textarea
          ref={bodyRef}
          name="body"
          rows={8}
          className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
        />
        <FormErrorMessage>{actionData?.errors?.body}</FormErrorMessage>
      </FormControl>

      <Button
        ml="auto"
        colorScheme="blue"
        type="submit"
        className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
      >
        Save
      </Button>
    </Form>
  );
}
