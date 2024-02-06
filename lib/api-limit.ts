import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import { MAX_FREE_COUNT } from '@/constants';

export const apiUseLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }
  //add a count towards user limit
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

// check if user has reached the limit of free  API calls for today
export const isOverFreeLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  // fetch user api limit
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });
  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};
