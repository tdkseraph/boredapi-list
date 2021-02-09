import React, { useEffect, useRef, useState } from 'react';
import { Button, Switch } from 'antd';
import { TransitionGroup } from 'react-transition-group';
import RemovableItem from '../../atom/RemovableItem/index';
import { getRandomEvent } from '../../../api/api';
import { LoadingOutlined } from '@ant-design/icons';
import './index.css';

export interface IActivityItem {
  items: string[];
}

export const RandomActivityList = () => {
  const mountedRef = useRef(true);
  const [auto, setAuto] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<IActivityItem[]>({ items: [] });

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    (async function fetchItem() {
      await handleAddItem();
    })();
  }, []);

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(async () => {
        await handleAddItem();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [auto]);

  const handleAddItem = async () => {
    setLoading(true);
    const item = await getRandomEvent();
    if (mountedRef.current && item)
      setList(prevState => {
        return { items: [...prevState.items, item] };
      });
    setLoading(false);
  };

  const items = list.items.map((item, i) => (
    <RemovableItem item={item} key={i} />
  ));

  return (
    <div className="react-transition-group">
      <div className="switch-load">
        {/*//@ts-ignore*/}
        <Switch
          checkedChildren="Auto loading"
          unCheckedChildren="Manual loading"
          size="default"
          onChange={() => {
            setAuto(!auto);
          }}
        />
      </div>
      {loading ? (
        <LoadingOutlined className="loading-icon" />
      ) : (
        //@ts-ignore
        <Button size="large" type="dashed" onClick={() => handleAddItem()}>
          Add an activity to your bucket list
        </Button>
      )}

      <div className="project">
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    </div>
  );
};
