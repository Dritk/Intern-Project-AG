interface StatCardProps {
  value: number | string;
  label: string;
  icon: React.ReactNode;
  iconBorderColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  iconBorderColor,
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border">
      <div>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border ${iconBorderColor}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
