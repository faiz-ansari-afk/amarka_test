
import { PokemonDetails, Tab, Comments } from './components';
import { pokemon_data } from './utils/pokemon_data';
import { comment_data } from './utils/comment_data';
import { FiDatabase } from 'react-icons/fi';

function App() {
  return (
    <main>
      <aside className="max-w-[104px] bg-[#202636] h-screen fixed">
        <div className='px-4 py-6'>
          <img src='./logo.png' alt="logo" className="border border-white " />
        </div>
        <div className="text-5xl text-white flex justify-center bg-[#383E4C] py-3 "><FiDatabase /></div>
      </aside>

      <article className="bg-[#151924]">
        <div className="font-[Cinzel] text-center text-4xl uppercase py-7 text-[#F2F5E0] font-normal">
          <span className="text-5xl">W</span>atch of the{' '}
          <span className="text-5xl">Y</span>ōkai{' '}
          <span className="text-5xl">H</span>unters
        </div>

        <div className="grid grid-cols-3  gap-12 mx-12">
          <div className="col-span-2  ml-[104px] rounded-lg mb-12">
            <Tab />
            <div className="flex text-white mb-2">
              <h2 className="flex-grow font-[Open Sans] ">
                Currently Showing: Only newly listed pairs that appears to be
                safe.{' '}
              </h2>
              <div className="">Sort by:  Initial Liquidity</div>
            </div>

            <div className="">
              {pokemon_data.map(data => <PokemonDetails data={data} />)}
              {/* <PokemonDetails data={pokemon_data[0]} /> */}
              {/* )} */}
            </div>
          </div>


          <div className="col-span-1 rounded-md flex flex-col h-fit bg-[#202636]">
            <Comments data={comment_data} />
            <div className="mx-3 mb-4">
              <input tyep="text" className="h-[45px] w-full bg-[#333c55] rounded-md pl-3 text-white " placeholder="Write your message" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
