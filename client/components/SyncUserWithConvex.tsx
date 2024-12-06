'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

function SyncUserWithConvex() {
  const { user } = useUser();

  // Update user
  const updateUser = useMutation(api.users.updateUser);

  useEffect(() => {
    if (!user) return;

    const syncUser = async () => {
      try {
        await updateUser({
          userId: user.id,
          name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
          email: user.emailAddresses[0]?.emailAddress ?? '',
        });
      } catch (error) {
        console.error('Error syncing user', error);
      }
    };
    syncUser();
  }, [user, updateUser]);

  return null;
}

export default SyncUserWithConvex;
