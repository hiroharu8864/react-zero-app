import { FC, memo, ReactNode } from "react";

/**
 * Base component of Molecules
 */

type Props = {
  children: ReactNode;
};

export const TestMolecules: FC<Props> = memo((Props) => {
  return (
    <>
      <div>
        <p>TestMolecules</p>
      </div>
    </>
  );
});
