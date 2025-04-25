type ChartCardProps = {
  title: string;
  headers: string[];
  imageSrc: string;
  message?: string;
};

const ChartCard = ({ title, headers, imageSrc, message }: ChartCardProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-base font-medium">{title}</p>
      <hr className="my-4" />
      <div className="flex flex-row md:gap-x-32 ">
        {headers.map((header) => (
          <p key={header}>{header}</p>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex justify-center mt-8">
        <img src={imageSrc} alt="Empty State" className="w-48" />
      </div>
      <p className="flex justify-center mt-2 opacity-50 text-sm">{message}</p>
    </div>
  );
};

export default ChartCard;
