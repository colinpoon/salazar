import { Heading } from '@/components/heading';

import { MessageSquare } from 'lucide-react';

export default function ConversationPage() {
  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:py-[32px] h-full">
      <Heading
        title="Conversation"
        desc="Leverage AI to create content or answer questions"
        icon={MessageSquare}
        iconColor="text-brand-primary"
        bgColor="bg-brand-muted-2"
      />
      <div className="space-y-4 w-full"></div>
      <div className="flex flex-col gap-5 items-center"></div>
    </div>
  );
}
