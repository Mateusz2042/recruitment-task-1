import { ReactNode } from "react";

export type MoodsProps = {
  moodsResult: ReactNode;
};

export function Moods({ moodsResult }: MoodsProps) {
  return <>{moodsResult}</>;
}

export default Moods;
