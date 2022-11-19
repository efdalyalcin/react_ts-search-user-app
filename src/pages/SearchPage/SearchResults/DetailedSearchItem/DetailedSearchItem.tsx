import "./DetailedSearchItem.scss";

type Props = {
  person: string[];
};

export default function DetailedSearchItem({ person }: Props) {
  return (
    <div key={person[0]} className="DetailedSearchItem">
      <div className="DetailedSearchItem__container">
        <div className="DetailedSearchItem__info-container" >
          <div className="DetailedSearchItem__icon" />
          <div className="DetailedSearchItem__text">
            <p className="DetailedSearchItem__name">{person[0]}</p>
            <p className="DetailedSearchItem__company">{person[1]}</p>
          </div>
        </div>
        <div className="DetailedSearchItem__place-container">
          <p className="DetailedSearchItem__country">{person[4]}</p>
          <p className="DetailedSearchItem__date">{person[3]}</p>
        </div>
      </div>
    </div>
  );
}
