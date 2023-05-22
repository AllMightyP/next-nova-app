import NextAuth, { NextAuthOptions, User } from "next-auth";
import DiscordProvider from 'next-auth/providers/discord';

const scopes = ['identify', 'email', 'connections', 'guilds', 'guilds.members.read'].join(' ')

export const authOptions: NextAuthOptions = {
    providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID ?? '',
        clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
        authorization: {params: {scope: scopes}},
        // profile(profile, tokens) {
        //   if (profile.avatar === null) {
        //     const defaultAvatarNumber = parseInt(profile.discriminator) % 5
        //     profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        //   } else {
        //     const format = profile.avatar.startsWith("a_") ? "gif" : "png"
        //     profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        //   }
        //   console.log(profile);
        //   return Awaitable<User>;
        // },
      }),
  ],
  callbacks:{
    session({ session, token, user }) {
      debugger 
      console.log("I'm in the callback!");
      console.log(token);
      console.log(user);
      return session;
    },
  }
}

export default NextAuth(authOptions)