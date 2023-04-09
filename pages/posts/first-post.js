import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <header id="Header"><h1>Welcome to Taewon's Page</h1></header>
      
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <h3>My hobbies</h3>
      <p>I have many different interests, therefore too many hobbies.
        <br></br>These are some of my hobbies: playing soccer or basketball, listening to music, watching movies, drawing, playing video games, programming etc.</p>

      <p>These are pretty common hobbies, except for one; programming<br></br>I've been programming since 5th grade, some of my work I am proud to present.</p>
      <a href="https://taewonportfolio.netlify.app/">See my work in p5.js</a>
      (Site still in work)
      <br></br><br></br>
      <h3>My background</h3>
      <p>I come from a family of 5 that is based in Daejeon, South Korea</p>
    </>
  );
}