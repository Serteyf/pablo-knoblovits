"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/components/utils/sendEmail";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import Roboto from "../utils/Roboto";
import styles from "./ContactForm.module.scss";
import { useFormState } from "react-dom";
import useMediaQuery from "../utils/useMediaQuery";
import ContactBlock from "./ContactBlock";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const isDesktop = useMediaQuery(863);
  const { register, handleSubmit, formState } = useForm<FormData>();
  const { isSubmitting } = formState;
  // const [state, formAction] = useFormState(increment, 0);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  async function increment(previousState: any, formData: any) {
    return previousState + 1;
  }

  function onSubmit(data: FormData) {
    setIsLoading(true);
    sendEmail(data);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        setIsLoading(false);
      }, 2000);
    });
  }

  return (
    <>
      <Box position="relative" outline="1px solid #FFFFFF">
        <Heading variant="tabWhite" bgColor="brand.white">
          Contacto
        </Heading>
      </Box>
      <HStack
        flexDirection={{ base: "column", sm: "row" }}
        maxW={{ base: "100%", sm: "65%" }}
        m={{ base: "0", sm: "0 auto" }}
      >
        <Box as="form" w={{ base: "75%", sm: "50%" }} onSubmit={handleSubmit(onSubmit)}>
          <VStack align="start" gap="1.5rem" w="100%" p="5rem 0">
            <Box w="100%">
              <FormControl variant="floating" id="name" isRequired w="70%">
                <FormLabel htmlFor="name" className="mb-3 block text-base font-medium text-black">
                  Nombre y Apellido
                </FormLabel>
                <Input
                  type="text"
                  // autoComplete="name"
                  _focus={{ borderColor: "bg.blue" }}
                  // placeholder="Nombre y Apellido"
                  {...register("name", { required: true })}
                />
              </FormControl>
            </Box>
            <Box w="100%">
              <FormControl variant="floating" id="email" isRequired w="70%">
                <FormLabel htmlFor="email">Dirección de Email</FormLabel>
                <Input
                  type="text"
                  // autoComplete="name"
                  _focus={{ borderColor: "bg.blue" }}
                  // placeholder="Dirección de Email"
                  {...register("email", { required: true })}
                />
              </FormControl>
            </Box>
            <Box w="100%">
              <FormControl variant="floating" id="subject" isRequired w="70%">
                <FormLabel htmlFor="subject">Asunto</FormLabel>
                <Input
                  type="text"
                  // autoComplete="name"
                  _focus={{ borderColor: "bg.blue" }}
                  // placeholder="Asunto"
                  {...register("subject", { required: true })}
                />
              </FormControl>
            </Box>
            <Box w="100%">
              <FormControl variant="floating" id="message" isRequired w="100%">
                <FormLabel htmlFor="message">Consulta</FormLabel>
                <Textarea
                  // autoComplete="name"
                  borderColor="#000"
                  _focus={{ borderColor: "bg.blue" }}
                  //   placeholder="Consulta"
                  {...register("message", { required: true })}
                />
              </FormControl>
            </Box>
            {/* <div className="mt-2">
              <button disabled={isSubmitting}>
                {isSubmitting && <Spinner />}
                Submit
              </button>
            </div> */}

            {isLoading ? (
              <Spinner />
            ) : (
              <div>
                <button className={styles.button}>Enviar</button>
              </div>
            )}
          </VStack>
        </Box>
        {isDesktop ? (
          <VStack justifyContent={"space-around"} w="50%" pb="8rem">
            <Flex pb="1.5rem">
              <PhoneIcon fontSize="lg" mr="1rem" alignSelf={"center"} />
              <Link fontSize="md" href="tel:+5491125568102">
                <Roboto>(+54) 9 11 2556 8102</Roboto>
              </Link>
            </Flex>
            <Flex>
              <EmailIcon fontSize="lg" mr="1rem" alignSelf="center" />
              <Link fontSize="md" href="mailto:enymet@gmail.com">
                <Roboto>enymet@gmail.com</Roboto>
              </Link>
            </Flex>
          </VStack>
        ) : (
          <ContactBlock />
        )}
      </HStack>
    </>
  );
};

export default Contact;
