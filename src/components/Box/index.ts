import { BoxColumn } from '@components/Box/BoxColumn';
import { BoxDivider } from '@components/Box/BoxDivider';
import { BoxLabel } from '@components/Box/BoxLabel';
import { BoxRoot } from '@components/Box/BoxRoot';
import { BoxRow } from '@components/Box/BoxRow';
import { BoxTitle } from '@components/Box/BoxTitle';
import { BoxValue } from '@components/Box/BoxValue';

/**
 * Usage example:
 * ```jsx
 * <Box.Root>
 *   <Box.Title />
 *   <Box.Row>
 *     <Box.Label />
 *     <Box.Value />
 *   </Box.Row>
 *   <Box.Divider />
 *   <Box.Column>
 *     <Box.Label />
 *     <Box.Value />
 *   </Box.Column>
 * </Box.Root>
 * ```
 */
export const Box = {
  Root: BoxRoot,
  Title: BoxTitle,
  Divider: BoxDivider,
  Column: BoxColumn,
  Row: BoxRow,
  Label: BoxLabel,
  Value: BoxValue,
};
