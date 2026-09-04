import img from "../../assets/404.png";
const notFound = () => {
  return (
    <div className="hero bg-base-300 min-h-screen">
      <div>
        <img src={img} alt="404" className="mx-auto" width="300" height="300" />
        <p className="text-3xl font-bold text-center">Página não encontrada</p>
      </div>
    </div>
  );
};

export default notFound;
