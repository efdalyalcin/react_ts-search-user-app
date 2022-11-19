import "./NewsCard.scss";

type Props = {
  data: CardData;
};

export default function NewsCard({ data }: Props) {
  return (
    <div className="NewsCard">
      <img src={data.img.image} alt={data.title} className="NewsCard__image" />
      <p className="NewsCard__title">{data.title}</p>
      <p className="NewsCard__info">{data.info}</p>
    </div>
  );
}
