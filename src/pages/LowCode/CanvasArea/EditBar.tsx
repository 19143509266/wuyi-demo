import { DeleteOutlined } from '@ant-design/icons';
import { layoutItem } from '@/pages/LowCode/types';
import styles from './edit_bar.less';

type Props = {
  componentItem: layoutItem;
  handleEditComponent: (item: layoutItem, type: string) => void;
};

const EditBar = (props: Props) => {
  const { componentItem, handleEditComponent } = props;

  return (
    <div className={styles['container-fluid']}>
      <DeleteOutlined
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          handleEditComponent(componentItem, 'delete');
        }}
      />
    </div>
  );
};

export default EditBar;
