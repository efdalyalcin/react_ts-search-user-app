import { Link } from 'react-router-dom';
import './AddNewRecord.scss';

export default function AddNewRecord() {
  return (
    <Link 
      to="/react_ts-search-user-app/addLink" 
      className="AddNewRecord"
      >
      Add new record
    </Link>
  );
}
