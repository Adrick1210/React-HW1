// the component function
const Project = () => {
  //The Components Returned JSX
  return (
    <div className="container">
      <div className="card card-1">
        <h1>Rock Paper Scissors With React</h1>
        <img src="/images/React-app.png" alt="React-App" />
        <button>
          <a href="https://github.com/Adrick1210/react-RPS">Repo</a>
        </button>
        <h3>
          <b>No Deployed Available</b>
        </h3>
      </div>
      <div className="card card-2">
        <h1>Todo List with Express</h1>
        <img src="/images/todo.png" alt="todo" />
        <button>
          <a href="https://github.com/Adrick1210/seal-project2">Repo</a>
        </button>
        <h3>
          <b>
            <a href="https://seal-project.onrender.com/todos">Try It Out!</a>
          </b>
        </h3>
      </div>
    </div>
  );
};

// export the component
export default Project;
