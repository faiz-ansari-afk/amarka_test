import parse from 'html-react-parser';

const Comments = ({ data }) => {
  console.table(data);
  return (
    <div className="mx-3 flex flex-col mt-4 mb-12">
      {data.map((d) => (
        <div className="flex gap-2 mb-4 text-[12px]    ">
          <img src={d.avatar} alt={d.name} className="rounded-full w-10 h-10" />
          <div className="flex-grow bg-white rounded-md pl-3 py-2">
            <div className="flex">
              <p className="text-[#007DD8] flex-grow">{d.name}</p>
              <p className="text-[10px] text-[#90A9BB] pr-3">Yōkai Hunter</p>
            </div>
            <p className="pr-3">{parse(d.htmlComment)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
