import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-[300px] h-[150px] rounded-xl bg-[#6037096c]" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-[#6037096c]" />
        <Skeleton className="h-4 w-[200px] bg-[#6037096c]" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
