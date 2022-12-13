const banner = `
██████╗  █████╗  █████╗ ███╗   ██╗    ██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗██████╗ 
██╔══██╗██╔══██╗██╔══██╗████╗  ██║    ██║ ██╔╝██╔═══██╗██╔══██╗██║   ██║██╔════╝██╔══██╗
██║  ██║███████║███████║██╔██╗ ██║    █████╔╝ ██║   ██║██████╔╝██║   ██║█████╗  ██████╔╝
██║  ██║██╔══██║██╔══██║██║╚██╗██║    ██╔═██╗ ██║   ██║██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
██████╔╝██║  ██║██║  ██║██║ ╚████║    ██║  ██╗╚██████╔╝██║  ██║ ╚████╔╝ ███████╗██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

Hi I am Daan Korver, a Web developer from the Netherlands :)
I am currently studying FDND @ HvA'

--------> Working @ <a href="https://level30wizards.com/">Level30Wizards</a> as a Creative Frontend Developer <--------

I like to program, workout, play games and hangout
Tinkering with Linux is a hobby of mine

I use arch btw

Type 'help' to see a list of available commands.
Type 'fetch' to display summary
Type 'projects' to view a list of my projects

* <strong>Working on a new portfolio website, here you can preview what I am working on</strong> *
<a target="_blank" href="https://portfolio-2022-beryl.vercel.app/">https://portfolio-2022-beryl.vercel.app/</a>
`

const fetch = `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  <b>root</b>@<b>daankorver</b>
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            Daan Korver
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <a target="_blank" href="https://daankorver.github.io/CV/">CV</a>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <a target="_blank" href="/">Portfolio</a>
▐▓                                 ▐▓       -----------
▐▓          > DAAN KORVER          ▐▓        CONTACT 
▐▓                                 ▐▓        <a href="mailto:daank2000@hotmail.nl">daank2000@hotmail.nl</a>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <a target="_blank" href="https://github.com/DaanKorver">github.com/DaanKorver</a>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <a target="_blank" href="https://linkedin.com/in/daan-korver-132425160">daan-korver-132425160</a>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            יּ OTHER
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                I like arch btw
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   Linux is my OS


`

const commands = `
** COMMANDS ARE CASE SENSITIVE **

Welcome! these are all of the available commands:

about         Outputs an about me
projects      Outputs some of my projects
banner        Outputs the banner
github        Outputs Github
linkedin      Outputs linkedIn
date          Show the date
clear         Clears the terminal screen
theme         Change themes
`

const projectlist = `
Here is a small list of some projects I did.

==========================================================================
id: 0
Name: Room
Description: Simple room made with Blender and ported onto the web using Svelte and Three.js
Tags: Svelte, Three.JS, Blender
Link: <a target="_blank" href="https://threlte-room.vercel.app/">View room</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/threlte-room">/threlte-room</a>
==========================================================================
id: 1
Name: We <3 Web Blog
Description: Blog made using Markdown files
Tags: HTML, CSS, JS, GSAP, Nuxt
Link: <a target="_blank" href="https://weloveweb.vercel.app/">We love web!</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/we-love-web>/we-love-web</a>
==========================================================================
id: 3
Name: Borthon.nl
Description: A webshop for my cousin. He sells awesome hoodies, you should buy one!
Tags: HTML, CSS, JS, Svelte, Shopify
Link: <a target="_blank" href="https://borthon.nl">borton.nl</a>
Github: <p>/Private repository, sorry!</p>
==========================================================================
id: 4
Name: Beyco Newspage
Description: A concept news page for Beyco.nl
Tags: HTML, CSS, JS, React
Link: <a target="_blank" href="https://beycodk.student.fdnd.nl/">Beyco newspage</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/chippr-beyco-newspage">/chippr-beyco-newspage</a>
==========================================================================
id: 5
Name: HighestCrit
Description: World of Warcraft addon to track your highest crit.
Tags: Lua, Scripting, WoW
Link: <a target="_blank" href="https://www.curseforge.com/wow/addons/highestcrit">HighestCrit</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/HighestCrit">/HighestCrit</a>
==========================================================================
id: 6
Name: Ilojo Bar
Description: A 3D Experience for the ilojo bar. A school project. First experience making my own models in Blender.
Tags: Svelte, Threlte, Three.js, Blender.
Link: <a target="_blank" href="https://ilojo-bar-rho.vercel.app/">Ilojo Bar 3D</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/lose-your-head-the-client-case">/lose-your-head-the-client-case</a>
==========================================================================

Want to see more?

Checkout my <a target="_blank" href="https://github.com/DaanKorver">Github</a>
`

const about = age =>
	`
Hi I am Daan Korver
I am a ${age} y/o developer from the Netherlands

I graduated Media college in 2020 as a Mediadeveloper
Currently studying FDND @ HvA
Working @ <a href="https://level30wizards.com/">Level30Wizards</a>

  My hobbies:
* Programming
* Working out
* Gaming
* Programming

I use arch btw
`

const listThemes = themes => {
	return themes.reduce((curr, prev) => curr + `\n${prev}`)
}

const themeUsage = `
Usage: theme &lt;command&gt; [&lt;args&gt;]

Commands: 
  set &lt;theme&gt;
    Set the theme for the terminal

  get
    Gets the current theme

  list
    Lists all of the available themes.
`

export { banner, fetch, commands, projectlist, about, themeUsage, listThemes }
