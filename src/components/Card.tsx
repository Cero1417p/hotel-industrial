interface CardProps {
  children: React.ReactNode;
}

interface ThumbnailProps {
  zoomOnHover?: boolean;
  children: React.ReactNode;
}

interface DescriptionProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <article className="bg-white">{children}</article>;
}

function Thumbnail({ zoomOnHover = true, children }: ThumbnailProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden ${zoomOnHover ? "[&>img:hover]:scale-125 [&>img]:transition-transform [&>img]:duration-300" : ""}`}>
      {children}
    </div>
  );
}

function Description({ className = "", children }: DescriptionProps) {
  return <div className={className}>{children}</div>;
}

Card.Thumbnail = Thumbnail;
Card.Description = Description;

export default Card;