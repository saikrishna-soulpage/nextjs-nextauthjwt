import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "welcome",
    });
  } else {
    res.send({
      content: "Not Signed In",
    });
  }
};
