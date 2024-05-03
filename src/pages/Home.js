import { useSelector } from "react-redux";
import About from "../Components/About";
import Courses from "../Components/Courses";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && (
        <div>
          <p className="text-center mt-5 fs-1">
            Welcome
            <span className="fw-bold">
              {user.name} {user.surname}
            </span>
          </p>
          <p className="text-center text-danger fs-3 ">{user.email}</p>
        </div>
      )}

      <About />
      <Courses />
    </>
  );
};

export default Home;
