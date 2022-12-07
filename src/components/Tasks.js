import Task from "./Task"

const Tasks = ({datas}) => {
  return (
    <div id="tasks">
      {datas.map((data)=><Task key={data.id} datas={data}/>)}
    </div>
  )
}

export default Tasks
