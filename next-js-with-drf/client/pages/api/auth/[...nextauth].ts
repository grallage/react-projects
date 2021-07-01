// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import { signIn } from "next-auth/client";
// import Providers from "next-auth/providers";
// import axios from "axios";
// import { AuthenticatedUser } from "../../../types";

// const settings: NextAuthOptions = {
//   debug: true,
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       console.log("1111111111111");
//       console.log(user, account, profile);
//       //   return true;
//       if (account.provider === "google") {
//         const { accessToken, idToken } = account;
//         try {
//           const response = await axios.post(
//             "http://localhost:8000/api/social/login/google/",
//             { access_token: accessToken, id_token: idToken }
//           );
//           const { access_token } = response.data;
//           user.accessToken = access_token;
//         } catch (error) {
//           return false;
//         }
//       }
//       return false;
//     },
//     async jwt(token, user, account, profile, isNewUser) {
//       console.log("222222222222222");
//       console.log(token, user, account, profile, isNewUser);
//       if (user) {
//         const { accessToken } = user;
//         token.accessToken = accessToken;
//       }
//       return token;
//     },
//     async session(session, user) {
//       console.log("3333333333333");
//       console.log(session, user);
//       session.accessToken = user.accessToken;
//       return session;
//     },
//   },
// };

// export default (req: NextApiRequest, res: NextApiResponse) =>
//   NextAuth(req, res, settings);

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   clientId: `58653252465-l8mhrf5bajrvmc0j5ji5a74d35nighsj.apps.googleusercontent.com`,
      //   clientSecret: `phjd9n4-rxpSsriKzH-eGhSS`,
      //   authorizationUrl:
      //     "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      //   scope:
      //     // "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly",
      //     "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
});
