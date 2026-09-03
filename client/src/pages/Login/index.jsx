const Login = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Você não precisa criar mais uma conta.
              <br />
              Escolha um dos serviços que já usa, e divirta-se.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <a
                  href="http://localhost:3000/api/auth/discord/callback"
                  className="btn bg-discord text-discord-content mt-4"
                >
                  Login Discord
                </a>
                <a
                  href="http://localhost:3000/api/auth/google/callback"
                  className="btn btn-neutral mt-4"
                >
                  Login Google
                </a>
                <button className="btn btn-neutral btn-disabled mt-4">
                  Login Outro
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
