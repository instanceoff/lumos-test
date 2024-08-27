'use server';

import { redirect } from 'next/navigation';

export const SendToConsole = async (formData: FormData) => {
  console.log(formData.get('email'));
};

export const OpenModal = async (formData: FormData) => {
  const name = formData.get('name');
  redirect('/?userName=' + name);
};
