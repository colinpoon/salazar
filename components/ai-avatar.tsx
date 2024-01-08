import { useUser } from '@clerk/nextjs';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

export const AiAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage className="p-1" src="/lg-logo-w.png" />
    </Avatar>
  );
};
