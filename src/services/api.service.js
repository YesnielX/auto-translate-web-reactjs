

export default class api {
    getGuildsAndusers() {
        return fetch('https://auto-translate-guilds-api.glitch.me/guilds').then(res => res.json()).then(res => res)
    }
}