
interface Props {
    imgURL: string;
    title: string;
    description: string;
}

const FeatureCard = ({imgURL, title, description}: Props) => {
  return (
    <div className="size-[200px] flex justify-between items-center px-10 py-10 bg-secondary-100 hover:bg-accent-100 rounded-[10px] text-white-100 m-5">
      <img
        src={imgURL}
        alt={`${title} icon`}
        width={36}
        height={36}
        className="hover:invert"
      />

      <div className="flex justify-center gap-3 flex-col">
        <h2 className="text-[18px] leading-[20px] text-center">{title}</h2>
        <p className="text-[16px] leading-[18px] font-normal text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard
