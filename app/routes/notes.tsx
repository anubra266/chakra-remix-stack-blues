import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import {
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { requireUserId } from "~/services/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import { ChakraRemixLink } from "~/components/factory";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <Flex h="full" minH="screenY" direction="column">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        bg="slategrey"
        color="white"
        p="2"
      >
        <Heading fontSize="3xl">
          <Link to=".">Notes</Link>
        </Heading>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <Button type="submit" colorScheme="red" size="sm">
            Logout
          </Button>
        </Form>
      </Flex>

      <Flex as="main" h="full" bg="white">
        <Stack
          h="full"
          w="80"
          borderRightWidth="1px"
          bg="gray.50"
          spacing="0"
          divider={<Divider />}
        >
          <ChakraRemixLink to="new" p="4" fontSize="xl" color="blue.500">
            + New Note
          </ChakraRemixLink>

          {data.noteListItems.length === 0 ? (
            <chakra.p p="4">No notes yet</chakra.p>
          ) : (
            <List>
              {data.noteListItems.map((note) => (
                <NavLink to={note.id} key={note.id}>
                  {({ isActive }) => (
                    <ListItem
                      p="4"
                      bg={isActive ? "white" : ""}
                      borderBottomWidth="1px"
                      fontSize="xl"
                    >
                      📝 {note.title}
                    </ListItem>
                  )}
                </NavLink>
              ))}
            </List>
          )}
        </Stack>

        <chakra.div flex="1" p="6">
          <Outlet />
        </chakra.div>
      </Flex>
    </Flex>
  );
}
