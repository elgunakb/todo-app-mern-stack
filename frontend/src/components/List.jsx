import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const { data } = useSelector((state) => state.allDataProcess);

  return (
    <div className="list">
      {data.map((item) => (
        <ListItem key={`${item._id}-${item.text}`} item={item} />
      ))}
    </div>
  );
};

export default List;
