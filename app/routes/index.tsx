import { Button, Flex, Heading, Image, chakra } from "@chakra-ui/react";

import { useOptionalUser } from "~/utils";
import { ChakraRemixLink } from "~/components/factory";

export default function Index() {
  const user = useOptionalUser();
  return (
    <chakra.main
      pos="relative"
      minH="screenY"
      bg="white"
      display={{ sm: "flex" }}
      alignItems={{ sm: "center" }}
      justifyContent={{ sm: "center" }}
    >
      <chakra.div pos="relative" pb={{ sm: 16 }} pt={{ sm: 8 }}>
        <chakra.div mx="auto" maxW="7xl" px={{ sm: 6, lg: 8 }}>
          <chakra.div
            pos="relative"
            shadow="xl"
            overflow={{ sm: "hidden" }}
            rounded={{ sm: "2xl" }}
          >
            <chakra.div pos="absolute" inset={0}>
              <Image
                objectFit="cover"
                boxSize="full"
                src="https://user-images.githubusercontent.com/1500684/158276320-c46b661b-8eff-4a4d-82c6-cf296c987a12.jpg"
                alt="BB King playing blues on his Les Paul guitar"
              />
              <chakra.div
                pos="absolute"
                inset={0}
                mixBlendMode="multiply"
                bg="rgba(27,167,254,0.5)"
              />
            </chakra.div>
            <chakra.div
              pos="relative"
              pb={{ base: 8, sm: 14, lg: 18 }}
              px={{ base: 4, sm: 6, lg: 8 }}
              pt={{ base: 16, sm: 24, lg: 32 }}
            >
              <Heading
                textAlign="center"
                fontSize={{ base: "6xl", sm: "8xl", lg: "9xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                <chakra.span
                  display="block"
                  textTransform="uppercase"
                  color="blue.500"
                  dropShadow="md"
                >
                  Blues Stack
                </chakra.span>
              </Heading>
              <chakra.p
                mx="auto"
                mt="6"
                textAlign="center"
                fontSize="xl"
                color="white"
                maxW={{ base: "lg", sm: "3xl" }}
              >
                Check the README.md file for instructions on how to get this
                project deployed.
              </chakra.p>
              <chakra.div
                mx="auto"
                mt="10"
                maxW={{ base: "sm", sm: "none" }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center" }}
              >
                {user ? (
                  <Button as={ChakraRemixLink} to="/notes">
                    View Notes for {user.email}
                  </Button>
                ) : (
                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    gap={{ base: "4", sm: "5" }}
                    mx={{ sm: "auto" }}
                    className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"
                  >
                    <Button as={ChakraRemixLink} to="/join">
                      Sign up
                    </Button>

                    <Button as={ChakraRemixLink} to="/login" colorScheme="blue">
                      Log In
                    </Button>
                  </Flex>
                )}
              </chakra.div>
              <a href="https://remix.run">
                <Image
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  mx="auto"
                  mt="16"
                  w="full"
                  maxW={{ base: "12rem", md: "16rem" }}
                />
              </a>
            </chakra.div>
          </chakra.div>
        </chakra.div>

        <chakra.div
          mx="auto"
          maxW="7xl"
          px={{ base: "4", sm: "6", lg: "8" }}
          py={{ base: "2" }}
        >
          <Flex mt="6" wrap="wrap" justify="center" gap="8">
            {[
              {
                src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
                alt: "Fly.io",
                href: "https://fly.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/158238105-e7279a0c-1640-40db-86b0-3d3a10aab824.svg",
                alt: "PostgreSQL",
                href: "https://www.postgresql.org/",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
                alt: "Prisma",
                href: "https://prisma.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                alt: "Chakra UI",
                href: "https://chakra-ui.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
                alt: "Cypress",
                href: "https://www.cypress.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
                alt: "MSW",
                href: "https://mswjs.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
                alt: "Vitest",
                href: "https://vitest.dev",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
                alt: "Testing Library",
                href: "https://testing-library.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
            ].map((img) => (
              <chakra.a
                key={img.href}
                href={img.href}
                display="flex"
                h="16"
                w="32"
                justifyContent="center"
                p="1"
                filter="grayscale(100%);"
                _hover={{
                  filter: "grayscale(0)",
                }}
                _focus={{
                  filter: "grayscale(0)",
                }}
                transitionProperty="all"
                transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
                transitionDuration="150"
              >
                <Image alt={img.alt} src={img.src} />
              </chakra.a>
            ))}
          </Flex>
        </chakra.div>
      </chakra.div>
    </chakra.main>
  );
}
