import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: DiscordUser & DefaultSession["user"];
  } 
  interface DiscordUser {
    user: {
      avatar: string,
      discriminator: string,
      email: string,
      id: string,
      image_url: string,
      username: string,
    }
  }
}