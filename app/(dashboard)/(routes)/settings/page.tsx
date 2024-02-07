import { Settings } from 'lucide-react';

import { Heading } from '@/components/heading';
import { checkSubscription } from '@/lib/subscription';
import { SubscriptionButton } from '@/components/subscription-button';

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:pb-[32px] h-full">
      <Heading
        title="Settings"
        desc=""
        icon={Settings}
        iconColor="text-neutral-1"
        bgColor="bg-brand-muted-1"
      />
      <div className="px-4 lg: pg-8 space-x-4">
        <div className="text-brand-2 text-sm text-center mb-4">
          {isPro ? 'Pro Plan Active' : 'Free Trial'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};
export default SettingsPage;
