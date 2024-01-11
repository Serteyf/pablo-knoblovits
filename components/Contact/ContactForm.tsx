'use client'

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons"
import { Box, Center, Flex, FormControl, FormLabel, HStack, Heading, Input, Link, VStack } from "@chakra-ui/react"

export default function ContactForm(){
    return(
        <>
        <Heading as="h2">
            Contacto
        </Heading>
        <Center>
            <HStack>
                <FormControl>
                    <FormLabel >Dirección de Email</FormLabel>
                    <Input type='email' />
                    <FormLabel  >Asunto</FormLabel>
                    <Input type="text" />
                    <FormLabel  >Asunto</FormLabel>
                    <Input type="textarea" />
                </FormControl>
                <VStack justifyContent={"space-around"} w="80%">
                    <Flex>
                    <PhoneIcon fontSize="lg" mr="1rem" alignSelf={"center"} />
                    <Link size="lg" href="tel:+5491125568102">
                        (+54) 9 11 2556 8102
                    </Link>
                    </Flex>
                    <Flex>
                    <EmailIcon fontSize="lg" mr="1rem" alignSelf="center" />
                    <Link size="lg" href="mailto:enymet@gmail.com">
                        enymet@gmail.com
                    </Link>
                    </Flex>
                </VStack>
            </HStack>
        </Center>
        </>
    )
}