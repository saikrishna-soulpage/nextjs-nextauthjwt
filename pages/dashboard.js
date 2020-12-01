import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

export default function Dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/loggedin");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <div>
        <h1>Not Signed In</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card-deck p-5">
        <div className="card">
          <div className="card-header text-center">
            <h1>Protected Page</h1>
            <div className="nav">
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className="card-body text-center">{content}</div>
        </div>
      </div>
    </div>
  );
}
