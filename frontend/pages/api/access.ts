import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function products(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    res.send(accessToken)
  } catch (error) {
    console.error(error);
    res.send(error)
  }
});
