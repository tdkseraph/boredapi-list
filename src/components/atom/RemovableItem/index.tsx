import React, { useState } from 'react';
import { List, Popover } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import './index.css';

export interface RemovableItemProps {
  item: any;
}

const placements = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
];

export const RemovableItem = ({ item }: RemovableItemProps) => {
  const [check, setCheck] = useState<boolean>(false);
  const Item = List.Item;

  const getContent = item => (
    <div>
      <p>
        The number of people that this activity could involve:{' '}
        {item.participants ?? 'Unknown'}
      </p>
      <p>Type of the activity: {item.type ?? 'Unknown'}</p>
    </div>
  );

  return (
    <Popover
      placement={placements[Math.floor(Math.random() * placements.length)]}
      content={() => getContent(item)}
      title={check ? `Added to bucket list` : 'No action'}
    >
      {/*// @ts-ignore*/}
      <Item>
        {item.activity}
        <HeartTwoTone
          className="close-spin-button"
          twoToneColor={check ? '#eb2f96' : 'silver'}
          spin={check}
          onClick={() => setCheck(!check)}
        />
      </Item>
    </Popover>
  );
};

export default RemovableItem;
