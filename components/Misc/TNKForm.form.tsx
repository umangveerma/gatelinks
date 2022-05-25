import { Box, Input, Button } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';

interface Props {
  onClose: () => void;
}

const TKNForm: FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState<Object>({
    title: undefined,
    description: undefined,
    url: undefined,
    mintAddress: undefined,
    tokenName: undefined,
    amount: undefined,
  });

  const { user } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    const data = {
      user: user?.email,
      ...formData!,
    };

    setLoading(true);

    axios
      .get('/api/access')
      .then((res) => {
        console.log(res.data);

        axios
          .post(`${process.env[`NEXT_PUBLIC_API_URL`]}/create/token`, data, {
            headers: { Authorization: `Bearer ${res.data.token}` },
          })
          .then((res) => {
            setLoading(false);
            onClose();
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <form>
      <Box
        my='10'
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        gap='4'
        fontFamily='poppins'>
        <Input
          bgColor='#F9F7FB'
          textColor='gray.700'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='please enter title...'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value as string,
            })
          }
          isRequired
        />
        <Input
          textColor='gray.700'
          bgColor='#F9F7FB'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='enter a short desc'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value as string,
            })
          }
          isRequired
        />
        <Input
          textColor='gray.700'
          bgColor='#F9F7FB'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='url for the resource'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              url: e.target.value as string,
            })
          }
          isRequired
        />
        <Input
          textColor='gray.700'
          bgColor='#F9F7FB'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='mint address of the token'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              mintAddress: e.target.value as string,
            })
          }
          isRequired
        />
        <Input
          textColor='gray.700'
          bgColor='#F9F7FB'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='SPL token name'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              tokenName: e.target.value as string,
            })
          }
          isRequired
        />
        <Input
          textColor='gray.700'
          bgColor='#F9F7FB'
          _focus={{}}
          _active={{}}
          w='96'
          h='10'
          px='3'
          fontWeight='500'
          fontSize='sm'
          placeholder='amount of tokens required'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: e.target.value as string,
            })
          }
          isRequired
        />

        <Button
          colorScheme='messenger'
          isLoading={loading}
          type='submit'
          onClick={handleClick}
          _active={{}}
          _focus={{}}>
          Upload
        </Button>
      </Box>
    </form>
  );
};

export default TKNForm;
