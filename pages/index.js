import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/redux/incrementReducer';
import { incrementPlayer01, conditions } from '../store/redux/player01';
import { incrementPlayer02, conditional } from '../store/redux/player02';

export default function Home() {
  const value = useSelector((state) => state.increment.value);
  const score1 = useSelector((state) => state.player01.score1);
  const condition = useSelector((state) => state.player01.condition);
  const score2 = useSelector((state) => state.player02.score2);
  const dispatch = useDispatch();

  return (
    <div className="h-screen grid items-center justify-center bg-gray-200 ">
      <div className="w-54 h-60 bg-white rounded-xl p-2 shadow-xl">
        <div className=" text-center h-60 ">
          <h1 className="text-3xl font-bold text-center my-2">
            Click Game ..!!
          </h1>
          <div className="my-2">
            <label htmlFor="condition">Game Condition</label>
            <input
              className="ml-1 border border-gray-200 "
              onChange={(e) => {
                dispatch(conditions(e.target.value));
                dispatch(conditional());
              }}
              value={condition}
              type="number"
              id="condition"
            />
          </div>

          <p className="my-2">
            Game Score : {score1} OF {score2}
          </p>

          <button
            onClick={() => dispatch(incrementPlayer01())}
            className={
              score1 >= condition && score2 < condition
                ? 'bg-green-500 border rounded-md text-sm text-white p-1 border-green-700 hover:bg-green-600 mx-2'
                : score2 > score1 && score2 >= condition
                ? 'bg-red-500 border-red-700 rounded-md text-sm text-white p-1 hover:bg-red-600 mx-2'
                : 'bg-cyan-500 border-cyan-700 rounded-md text-sm text-white p-1 hover:bg-cyan-600 mx-2 '
            }
            disabled={
              score1 >= condition ? true : score2 >= condition ? true : false
            }
          >
            player01
          </button>
          <button
            onClick={() => dispatch(incrementPlayer02())}
            className={
              score2 >= condition && score1 < condition
                ? 'bg-green-500 rounded-md border-green-700 text-sm text-white p-1 hover:bg-green-600 mx-2'
                : score1 > score2 && score1 >= condition
                ? 'bg-red-500 border-red-700 rounded-md text-sm text-white p-1 hover:bg-red-600 mx-2'
                : 'bg-cyan-500 border-cyan-700 rounded-md text-sm text-white p-1 hover:bg-cyan-600 mx-2 '
            }
            disabled={
              score2 >= condition ? true : score1 >= condition ? true : false
            }
          >
            player02
          </button>
          <button
            onClick={() => {
              dispatch(conditions(5));
              dispatch(conditional());
            }}
            className="bg-cyan-500 border-cyan-700 rounded-md text-sm text-white p-1 hover:bg-cyan-600 mx-2 "
          >
            Reset
          </button>
          <div className="my-2">
            {condition === (score1 || score2) && (
              <small className="text-black">
                {' '}
                Hurry..!!{' '}
                <span className="text-green-500">
                  {score1 > score2 ? 'Player01' : 'Player02'}
                </span>{' '}
                win. Congratulations.. !!
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
