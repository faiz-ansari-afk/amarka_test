import { useState } from 'react';

const Tab = () => {
  const [active, setActive] = useState('appears');

  const iterable = [
    { name: 'Appears Safe', value: 'appears' },
    { name: 'Medium Risk', value: 'medium' },
    { name: 'Probably Rug / Scam', value: 'probably' },
  ];
  return (
    <div className="grid grid-cols-3 rounded-lg border-white mb-12">
      {iterable.map((item) => (
        <div
        key={item.value}
          className={`${active === item.value ? 'bg-[#383E4C] ' : 'bg-[#202636]'} text-white text-center py-3`}
          onClick={() => setActive(item.value)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Tab;

// active class color  #383E4C  else #202636
