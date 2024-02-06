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
