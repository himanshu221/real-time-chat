import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

const App = () => {
  return (
    <div className='w-[90vw] h-[90vh] bg-[#111928bf] rounded-lg backdrop-blur-md backdrop-saturate-200 flex'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App