"use client";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  percentage,
  current,
  locked,
  totalCount,
  index,
}: Props) => {
  return <div>Id</div>;
};
