import { useState } from 'react';

function App() {
  const [newToDo, setNewToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  function addNewToDo() {
    setToDos([
      ...toDos,
      {
        text: newToDo,
        isComplete: false,
      }
    ])
    setNewToDo('');
  }

  function markDone(toDoIndex) {
    const newToDos = [...toDos];
    newToDos[toDoIndex].isComplete = !newToDos[toDoIndex].isComplete;

    setToDos(newToDos);
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="bg-slate-100 w-full max-w-3xl mx-auto p-10">
        <div className='flex gap-x-4'>
          <input placeholder='Enter Your ToDo' type="text" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} className="border rounded w-full text-3xl p-4" />
          <button className='text-5xl bg-white p-4 rounded-full' onClick={addNewToDo}>
            &rarr;
          </button>
        </div>

        <div className='bg-white mt-10'>
          {toDos.map((toDo, index) => (
            <button className='p-4 border-b flex w-full text-left' onClick={() => markDone(index)}>
              <div className='w-full'>{toDo.text}</div>
              <div className={`h-6 w-6 border border-gray-800 rounded ${toDo.isComplete ? 'bg-green-500' : 'bg-white'}`} />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
