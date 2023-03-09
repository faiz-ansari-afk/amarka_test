import React from 'react';
import { FaDiscord, FaTelegramPlane, FaRegCopy } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { AiOutlineTwitter, AiFillCaretDown } from 'react-icons/ai';
import { RiUserSearchLine } from 'react-icons/ri';

function genSocialIcon(name, active) {
  switch (name.toLowerCase()) {
    case 'discord':
      return (
        <FaDiscord
          className={`${active ? 'text-white' : 'text-black'} text-sm`}
        />
      );
    // break;
    case 'pc':
      return (
        <HiDesktopComputer
          className={`${active ? 'text-white' : 'text-black'} text-sm`}
        />
      );
    case 'telegram':
      return (
        <FaTelegramPlane
          className={`${active ? 'text-white' : 'text-black'} text-sm`}
        />
      );
    case 'twitter':
      return (
        <AiOutlineTwitter
          className={`${active ? 'text-white' : 'text-black'} text-sm`}
        />
      );

    default:
      return null;
  }
}
const PokemonDetails = ({ data }) => {
  console.log(data);
  return (
    <div
      className="bg-[#202636] grid grid-cols-12 gap-3 py-3 rounded-md my-5"
      key={data.image}
    >
      <div className="col-span-2 flex flex-col ">
        <div className="avatar my-2">
          <img src={data.image} className="" alt="user profile" />
        </div>
        <div className="flex flex-wrap gap-1 text-2xl mx-5">
          {data.social.map((social, index) => {
            return (
              <div className="cursor-pointer justify-center " key={index}>
                {genSocialIcon(social.name, social.active)}
              </div>
            );
          })}
        </div>
        <div className="time bg-[#2D354B] rounded-md py-2 px-3 m-3">
          <p className="text-[8px] tracking-widest m-0 text-center uppercase text-white">
            Time Listed
            <span className="text-[15px] text-center font-light inline-block">
              {data.time} Hours
            </span>
          </p>
        </div>
      </div>

      <div className="col-span-9">
        <div className="flex gap-2 items-center font-[Open sans]">
          <div className="text-3xl text-white  tracking-wider">{data.name}</div>
          <div className="pl-2 text-green-600 text-3xl font-light">
            {data.percentage}
          </div>
          <div className="uppercase flex items-center text-white text-[8px] bg-[#2D354B] p-2 rounded-lg ">
            24 hrs <AiFillCaretDown />
          </div>
        </div>
        <div className="text-white text-2xl font-thin pb-2 ">
          {data.summary}
        </div>
        <div className=" grid grid-cols-4  max-w-[500px] ">
          <div className="font-thin uppercase text-[8px] text-white text-center py-1 border border-r-0 ">
            Liquidity: &nbsp;
            <span className="tracking-wider">{data.liquidity}</span>
          </div>
          <div className="font-thin uppercase text-[8px] text-white text-center py-1 border border-r-0 ">
            Market cap: &nbsp;
            <span className="tracking-wider">{data.marketcap}</span>
          </div>
          <div className="font-thin uppercase text-[8px] text-white text-center py-1 border border-r-0 ">
            24H volume: &nbsp;
            <span className="tracking-wider">{data.volume}</span>
          </div>
          <div className="font-thin uppercase text-[8px] text-white text-center py-1 border  ">
            Total supply: &nbsp;
            <span className="tracking-wider">{data.totalsupply}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 text-[10px] text-[#8A8FCB] py-2">
          <div className="flex items-center gap-2">
            Contract: {data.contract_id} <FaRegCopy />
          </div>
          <div className="flex items-center gap-2 ">
            Pair: {data.pair_id} <FaRegCopy />
          </div>
        </div>

        <ul
          className={`grid ${
            data.list.length > 12
              ? 'grid-cols-5 grid-rows-4'
              : 'grid-cols-4 grid-rows-3'
          }`}
        >
          {generateList(data.list)}
        </ul>

        <div className="my-4 flex gap-4">
          <button className="uppercase py-2 px-8 text-sm text-white tracking-widest rounded-md bg-[#3946A0]">
            TRADE
          </button>
          <button className="uppercase py-2 px-8 text-sm text-white border-white border tracking-widest rounded-md bg-transparent">
            Charts
          </button>
          {data.extraButton && (
            <button className="uppercase py-2  text-xs px-3 text-white   rounded-md bg-[#C77802] ">
              {data.extraButton}
            </button>
          )}
        </div>
      </div>
      <div className="col-span-1 flex flex-col ">

        <div className="relative flex-grow">
          <div className="-mt-3 clippedTriangle h-[65px] bg-[#C77802] mr-4">
            <div className="text-white text-[24px] text-center">
              {data.score}
            </div>
            <div className="text-white text-center text-[10px] opacity-[50%]">
              / 100
            </div>
          </div>
        </div>

        <div className="rounded-[100%] flex justify-center p-3  border border-white  text-white mr-4">
          <RiUserSearchLine className="" />
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default PokemonDetails;

function generateList(data) {
  return data.map((d, index) => {
    return (
      <li key={index}>
        <div className="text-white text-[10px] flex items-center">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              d.active ? 'bg-green-600' : 'bg-orange-600'
            } mr-1`}
          ></span>
          {d.text}
        </div>
      </li>
    );
  });
}
