import { Box, Input, Button } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';

interface Props {
  onClose: () => void;
}

const TNKForm: FC<Props> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState<any>();

  const { user } = useUser();

  const onSubmit = (data: any) => setFormData(data);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    const data = {
      user: user?.email,
      ...formData!,
    };

    axios
      .get('/api/access')
      .then((res) => {
        axios
          .post(`${process.env[`NEXT_PUBLIC_API_URL`]}/create/token`, data, {
            headers: { Authorization: `Bearer ${res.data.token}` },
          })
          .then((res) => {
            onClose();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register('title')}
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
          {...register('description')}
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
          {...register('url')}
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
          placeholder='mint address for the NFT'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          {...register('mintAddress')}
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
          placeholder='name of the SPL Token'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          {...register('tokenName')}
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
          placeholder='amount of the SPL token'
          _placeholder={{ color: '#606366', fontWeight: '500' }}
          {...register('amount')}
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

export default TNKForm;
