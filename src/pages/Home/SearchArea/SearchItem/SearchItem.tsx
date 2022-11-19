import './SearchItem.scss';

type Props = {
  person: string[];
};

export default function SearchItem({person}: Props) {
  return (
    <div key={person[0]} className="SearchItem">
      <div className="SearchItem__icon" />
      <div className="SearchItem__text">
        <p className="SearchItem__name">{person[0]}</p>
        <p className="SearchItem__company">{person[1]}</p>
      </div>
    </div>
  )
}
