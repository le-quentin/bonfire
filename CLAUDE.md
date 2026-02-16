# Bonfire

This project is a fork of the Cinny matrix client. The goal here is to PoC my idea of making a Discord clone based on the Matrix open standard. I wanna bring it to a point where it's good enough to be used with my friends, at which point I can use daily, and estimate if there's enough product potential to write my own Matrix client from scratch.

IMPORTANT: **this is a PoC, the simplest implementation will always be the best one. Think minimal amount of change**.

## The features

This product will be feature complete enough when it has the following:
- [ ] Discord look&feel (as close as possible)
- [ ] Persistent voice channels: just like in Discord, voice chanels are always open, you can join them anytime, even on your own, and other people can see you're in there from the side pannel. From these channels, just the mic is open by default, but you can also open your cam or share your screen etc.
- [ ] Custom emojis (at least handled by a space, not necessary user by user)
- [x] Links embed integrations: at least for Youtube and X.com, show an embed with video description and thumbnail, or the content of the tweet for X. => actually Cinny already had the feature, it was just locked behind a user setting. We moved the setting to be space/room scoped, more in the Discord spirit
- [x] Gifs: possibility to copy paste a gif from the web, and ideally a gif search function akin to the Discord one

## Technically speaking

We won't change anything about the tech stack unless we 100% need to.

## About me

I'm a seasoned software engineed, who's more experienced in the backend. I know how to code, I know many things. While not a Typescript expert, I used it a lot. However, I've never used React before. So while making changes, feel free to explain why you're making them and how they interact with the react framework. Seize opportunities to teach me a little about React concepts along the way. In a similar fashion, I have zero knowledge about the Matrix standard, so teach me about it along the way.
