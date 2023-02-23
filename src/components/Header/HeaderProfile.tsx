import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import profileSvg from '@assets/svg/profile.svg';

import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

export function HeaderProfile() {
  const isFirstRender = useRef(true);
  const session = useSession();
  const router = useRouter();

  const isAccountComplete = session.data?.user.isAccountComplete;
  const isProfilePage = router.pathname === '/profile';

  const [isSignOut, setIsSignOut] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [showRequestToCompleteProfileTooltip, setShowRequestToCompleteProfileTooltip] =
    useState(isFirstRender.current && !isAccountComplete && !isProfilePage);

  function handleTooltipOpenChange(open: boolean) {
    if (!isFirstRender.current && open) {
      setShowRequestToCompleteProfileTooltip(false);
    }
  }

  function handleOnPopoverChange(open: boolean) {
    setShowRequestToCompleteProfileTooltip(false);
    setShowPopover(open);
  }

  function handleSignOut() {
    setIsSignOut(true);
    signOut();
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, []);

  return (
    <Popover.Root onOpenChange={handleOnPopoverChange} open={showPopover}>
      <Tooltip.Provider>
        <Tooltip.Root
          open={showRequestToCompleteProfileTooltip}
          onOpenChange={handleTooltipOpenChange}
        >
          <Tooltip.Trigger asChild>
            <Popover.Trigger className="flex items-center gap-2 hover:underline">
              <span className="text-purple-900 font-medium">
                {session.data?.user.name}
              </span>

              <Image src={profileSvg} height={48} width={48} />
            </Popover.Trigger>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content className="bg-white p-3 w-60 rounded-lg shadow-2xl border border-purple-900">
              <Tooltip.Arrow className="fill-purple-900 mb-1" width={30} height={10} />

              <span className="text-xl text-blue-900">
                Clique aqui para finalizar seu cadastro e liberar o acesso completo a
                plataforma.
              </span>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Popover.Portal>
        <Popover.Content className="bg-white p-5 rounded-b-md flex flex-col gap-4 items-end shadow-md mt-1 mr-2">
          <Link
            className="border border-orange-600 px-4 py-1 rounded-lg text-orange-600 text-2xl hover:bg-blue-900 hover:border-blue-900 hover:text-white transition-colors"
            href="/profile"
            onClick={() => setShowPopover(false)}
          >
            Config. Perfil
          </Link>

          <Button onClick={handleSignOut} disabled={isSignOut}>
            {isSignOut ? <Loading className="w-6" /> : `Sair >`}
          </Button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
