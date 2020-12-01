import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session && (
          <div className="container">
            <div className="card-deck p-5">
              <div className="card ">
                <h1 className="card-header text-center">Please Sign In</h1>
                <div className="card-body text-center">
                  <h1 className="p-2">Not signed in</h1>
                  <button className="button m-2" onClick={signIn}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {session && (
          <>
            <div className="container">
              <div className="card-deck p-5">
                <div className="card ">
                  <div className="card-header text-center">
                    <h1 className="h2"> Signed in as {session.user.name}</h1>
                    {session.user.email}
                    <div className="nav">
                      <Link href="/dashboard">Dashboard</Link>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    {session.user.image && (
                      <img
                        src={session.user.image}
                        style={{ width: "25px", borderRadius: "50%" }}
                        className="m-2"
                      />
                    )}
                    {session.user.name}
                    <br />
                    <button className="m-2" onClick={signOut}>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <h1 className="h2"> Signed in as {session.user.name}</h1>
              {session.user.email}
              <div className="nav">
                <Link href="/dashboard">Dashboard</Link>
              </div>
              {session.user.image && (
                <img
                  src={session.user.image}
                  style={{ width: "25px", borderRadius: "50%" }}
                />
              )}
              <br />
              <button className="b1" onClick={signOut}>
                Sign Out
              </button>
              <div className="h">Protected pages</div>
              <p className="p">
                <strong>Index Page</strong>
              </p>
            </div> */}
          </>
        )}
      </main>
    </div>
  );
}
