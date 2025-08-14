import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <FeedWrapper>my</FeedWrapper>
      <StickyWrapper>My Sticky sidebar</StickyWrapper>
    </div>
  );
};

export default LearnPage;
