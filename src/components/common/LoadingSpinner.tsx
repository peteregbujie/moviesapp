import { LoaderCircle } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <LoaderCircle className="animate-spin text-gray-500" />
    </div>
  );
};

export default LoadingSpinner;