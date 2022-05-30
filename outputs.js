const banner = `
██████╗  █████╗  █████╗ ███╗   ██╗    ██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗██████╗ 
██╔══██╗██╔══██╗██╔══██╗████╗  ██║    ██║ ██╔╝██╔═══██╗██╔══██╗██║   ██║██╔════╝██╔══██╗
██║  ██║███████║███████║██╔██╗ ██║    █████╔╝ ██║   ██║██████╔╝██║   ██║█████╗  ██████╔╝
██║  ██║██╔══██║██╔══██║██║╚██╗██║    ██╔═██╗ ██║   ██║██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
██████╔╝██║  ██║██║  ██║██║ ╚████║    ██║  ██╗╚██████╔╝██║  ██║ ╚████╔╝ ███████╗██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

Hi I am Daan Korver, a Web developer from the Netherlands :)
I am currently studying FDND @ HvA
I like to program, workout, play games and hangout
Tinkering with Linux is a hobby of mine

I use arch btw

Type 'help' to see a list of available commands.
Type 'fetch' to display summary
Type 'projects' to view a list of my projects
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
`

const projectlist = `
Here is a small list of some projects I did.

==========================================================================
id: 0
Name: Catstagram
Description: A instagram clone but only for cats (using AI to check that)
Tags: HTML, CSS, JS, Sveltekit, TensorFlow
Link: <a target="_blank" href="https://github.com/DaanKorver/catstagram">Coming Soon...</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/catstagram">/catstagram</a>
==========================================================================
id: 1
Name: Scrollbook
Description: Making reading books a lot better
Tags: HTML, CSS, JS, GSAP, Nuxt
Link: <a target="_blank" href="https://scrollbook.student.fdnd.nl">Scrollbook</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/the-startup-scrollbook">/the-startup-scrollbook</a>
==========================================================================
id: 3
Name: Borthon.nl
Description: A webshop for my cousin. Work in progress, not finished yet
Tags: HTML, CSS, JS, Sveltekit, Commerce.js
Link: <a target="_blank" href="https://github.com/DaanKorver/borthon.nl">borton.nl</a>
Github: <a target="_blank" href="https://github.com/DaanKorver/borthon.nl">/Private repository</a>
==========================================================================
id: 4
Name: Beyco Newspage
Description: A concept news page for Beyco.nl
Tags: HTML, CSS, JS, Sveltekit, Commerce.js
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

Want to see more?

Checkout my <a target="_blank" href="https://github.com/DaanKorver">Github</a>
`

const about = `
Hi I am Daan Korver
I am a 21 y/o developer from the Netherlands

I graduated Media college in 2020 as a Mediadeveloper
Currently studying FDND @ HvA

  My hobboies:
* Programming
* Working out
* Gaming
* Programming

I use arch btw
`

export { banner, fetch, commands, projectlist, about }
