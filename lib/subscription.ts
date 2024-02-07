import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';

const DAY_IN_MS = 86_400_00;
export const checkSubscription = async () => {
  const { userId } = auth();
  if (!userId) {
    return false; // Not logged in.
  }
  const userSubscription = await prismadb.userSubscription.findUnique(
    {
      where: {
        userId: userId,
      },
      select: {
        stripeSubscriptionId: true,
        stripeCurrentPeriodEnd: true,
        stripeCustomerId: true,
        stripePriceId: true,
      },
    }
  );
  if (!userSubscription) {
    return false; // No subscription found for this user.
  }
  //check if not expired && valid
  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
