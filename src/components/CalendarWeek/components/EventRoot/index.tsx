import { DefaultEventRootComponent } from '@remotelock/react-week-scheduler';
import { EventRootProps } from '@remotelock/react-week-scheduler/src/types';
import Tippy from '@tippyjs/react';
import Image from 'next/image';
import React from 'react';

import deleteIcon from '@assets/svg/delete.svg';

const EventRoot = React.forwardRef<any, EventRootProps>(function EventRoot(
  { handleDelete, disabled, ...props },
  ref
) {
  return (
    <Tippy
      arrow
      interactive
      hideOnClick={false}
      className="p-0"
      content={
        <button
          onClick={handleDelete}
          type="button"
          className="flex flex-row items-center justify-center p-2 text-white bg-orange-500 rounded-md"
        >
          <Image src={deleteIcon} />
          <dt className="ml-1">Delete</dt>
        </button>
      }
    >
      <DefaultEventRootComponent
        handleDelete={handleDelete}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    </Tippy>
  );
});

export default EventRoot;
