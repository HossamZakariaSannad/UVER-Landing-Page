const PartnerCard = ({ name, icon, style }) => {
  let content;
  switch (style) {
    case 'iconTop':
      content = (
        <div className="flex flex-col items-center gap-2">
          {icon}
          <span>{name}</span>
        </div>
      );
      break;
    case 'iconLeft':
      content = (
        <div className="flex items-center gap-3">
          {icon}
          <span>{name}</span>
        </div>
      );
      break;
    case 'borderedTextDouble':
      content = (
        <div className="relative">
          <span className="block border border-gray-500 px-5 py-2 bg-gray-800 z-10">{name}</span>
          <span className="absolute -top-2 -left-2 h-full w-full border border-gray-500"></span>
        </div>
      );
      break;
    default:
      content = <span>{name}</span>;
  }

  return <div className="flex items-center justify-center h-40 p-4 text-gray-300">{content}</div>;
};

export default PartnerCard;