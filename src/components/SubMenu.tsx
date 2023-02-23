import * as Tabs from '@radix-ui/react-tabs';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

function SubMenuList({ className, ...rest }: Tabs.TabsListProps) {
  return <Tabs.List className={twMerge('flex', className)} {...rest} />;
}

function SubMenuTrigger({ className, ...rest }: Tabs.TabsTriggerProps) {
  return (
    <Tabs.Trigger
      className={twMerge(
        'h-10 min-w-[11.5rem] px-1 flex items-center justify-between gap-3 border-b border-orange-600 state-inactive:hover:bg-gray-300 group state-active:border-blue-900 transition-colors',
        className
      )}
      {...rest}
    />
  );
}

type SubMenuTitleProps = HTMLAttributes<HTMLSpanElement>;

function SubMenuTitle({ className, ...rest }: SubMenuTitleProps) {
  return (
    <span
      className={twMerge(
        'text-gray-300 group-state-active:text-blue-900 group-hover:text-white transition-colors',
        className
      )}
      {...rest}
    />
  );
}

type SubMenuCountProps = HTMLAttributes<HTMLSpanElement>;

function SubMenuCount({ className, ...rest }: SubMenuCountProps) {
  return (
    <span
      className={twMerge(
        'border rounded-lg flex items-center justify-center h-6 px-2 text-gray-300 border-transparent group-state-active:text-blue-900 group-hover:text-white group-state-active:border-blue-900 transition-colors',
        className
      )}
      {...rest}
    />
  );
}

/**
 * Usage example:
 * ```jsx
 * <SubMenu.Root>
 *   <SubMenu.Title />
 *   <SubMenu.Count />
 * </SubMenu.Root>
 * ```
 */
export const SubMenu = {
  List: SubMenuList,
  Trigger: SubMenuTrigger,
  Title: SubMenuTitle,
  Count: SubMenuCount,
};
