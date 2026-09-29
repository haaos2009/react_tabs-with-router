import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};
type Props = {
  tabs: Tab[];
  activeTabId: string;
};

export const Tabs = ({ tabs, activeTabId }: Props) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === activeTabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
