import { ReactElement } from 'react';

function PaymentsItem({
  name,
  icons,
  className = '', // Optional custom styles
}: {
  icons: ReactElement;
  name: string;
  className?: string; // Allow an optional className prop
}) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {icons}
      <span className="text-gray-700">{name}</span>
    </div>
  );
}

export default PaymentsItem;
