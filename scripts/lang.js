let current = "en"; // switched on load

const translations = {
    da: {
        button: "Switch to English 🇺🇸",
        h0: "Datatekniker — Programmering",

        h1: "Profil",
        p1: "Stille type med ADHD, hvilket giver mig ekstremt fokus og energi, når jeg arbejder med noget jeg brænder for.",
        p2: "Jeg lærer hurtigt, arbejder bedst selvstændigt med fordybelse og tekniske udfordringer alene, men bidrager også gerne i mindre samarbejdsgrupper.",
        p3: "Jeg fortækker ikke at arbejde med AI til problemløsning.",

        h2: "Uddannelse",

        h3: "Kompetencer",
        ul1: "Kørekort til Kategori-B",
        ul2: "Lærenem og idérig",
        ul3: "Best med Lua og C#",
        ul4: "Spilsikkerhed og Modding",
        ul5: "Deklarativ programmering",
        ul6: "Stærk i Teknik og Datalogi",
        ul7: "Stærk i Pogrammeringsteori",
        ul8: "Stærk i Engelsk og Matematik",

        h4: "Erfaring",
        ul9: "Mange år som Discord server administrator",
        ul10: "C#: Discord Bots med .NET inkl. med Ollama — local LLM",
        ul11: "F#: Autofishing macro for Roblox spil",
        ul12: "BepInEx: Unity Modding — VR spil",
        ul13: "Roblox Lua: Flere Camera scripts",
        ul14: "Roblox Lua: Genbrug af Quake's 'bunnyhop kode' med Vector Projection",
        ul15: "Lua: Garry's Mod Expression 2 og Starfall",
        ul16: "Spilmanipulering og reverse engineering",

        h5: "Kendskaber",
        ul17: "Netværk, Subnetting, Kommunikationsteori",
        ul18: "Kendskab til AI siden 2021",
    },
    en: {
        button: "Skift til Dansk 🇩🇰",
        h0: "Datatechnician — Programming",

        h1: "Profile",
        p1: "Chill person with ADHD, which gives me great focus and energy, when I work with something I enjoy.",
        p2: "I'm a fast learner, working best independently when immersed with technical challenges alone, but willing to contribute in groups.",
        p3: "Personally against use of AI when it comes to problemsolving.",

        h2: "Education",

        h3: "Capabilities",
        ul1: "Drivers' License",
        ul2: "Fast learner and Innovative",
        ul3: "Best with Lua and C#",
        ul4: "Game-security og Modding",
        ul5: "Declarative orogramming",
        ul6: "Strong in general tech and computer science",
        ul7: "Strong in Programming theory",
        ul8: "Strong in English and Math",

        h4: "Experience",
        ul9: "Many years as Discord server administrator",
        ul10: "C#: Discord Bots with .NET, including Ollama (Local LLM)",
        ul11: "F#: Autofishing macro for a Roblox game",
        ul12: "BepInEx: Unity Modding — VR games",
        ul13: "Roblox Lua: Multiple Camera scripts",
        ul14: "Roblox Lua: Remaking Quake's 'bunnyhop code' with Vector Projection",
        ul15: "Lua: Garry's Mod Expression 2 and Starfall",
        ul16: "Game modification and reverse engineering",

        h5: "Familiarity",
        ul17: "Networking, Communication-theory",
        ul18: "Familiar with AI since 2021",

    }
};

function toggle() {
    current = current === "da" ? "en" : "da";

    //update
    document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[current][key];
  });
}