import React from "react";
import "./InfoAnime.css";
export default function InfoAnime() {
  const goku = process.env.PUBLIC_URL + "/images/pngegg-goku.png";
  return (
    
    <div className="container">
      <img className="goku-pic" src={goku} />
      <div className="info">
      <br />
        <h2>1/ What's W anime?</h2>
        <p>
          W anime is a free anime streaming site where you can watch anime
          online in HD quality for free with English subtitles or dubbing.
          <br /> You can also download any anime you want without registration
          or payment required. Everything is free!
        </p>
        <br />
        <br />
        <h2>2/ Is W anime safe?</h2>
        <p>
          Yes. We started this site to improve UX and are committed to keeping
          our users safe. <br />
          We encourage all our users to notify us if anything looks suspicious.
          Please understand that we do have to run advertisements to maintain
          the site.
        </p>
        <br />
        <br />
        <h2>3/ What make W anime the best site to watch anime free online?</h2>
        <br />
        <p>
        <span>- Content library</span>: We were only a few hundred of old animes behind
          kisanime when it was around. We have been adding new and old animes
          every hour to our library.<br /> You can find almost everything here. After
          the closing of kissanime, we become the largest anime library on the
          web.<br /><br />  <span>- Streaming experience</span>: We have top of the line streaming
          servers. You can simply choose one that is fast for you.<br /><br />  <span>-
          Quality/Resolution</span>: All our video files are encoded in highest
          possible resolution.<br /> We also have quality setting function that allows
          every user to enjoy streaming regardless of their internet speed.<br /><br />  <span>-
          Updates</span>: Our content is updated hourly, most of the works done
          automatically so you will get update as fast as possible.<br /><br />  <span>- User
          interface</span>: We focus on the simple and easy to use, so you will feel
          the life is easier here.<br /> We also have almost every feature that other
          anime streaming sites have, but not the opposite.<br /><br />  <span>- Device
          compatibility</span>: W anime works fine on both desktop and mobile devices,
          even with old browsers, so you can enjoy your anime anywhere you want.<br />
          So, if you want a good and safe place to watch anime online for free,
          give Aniwave a try, and if you like what we provided,<br /> please help us
          by sharing 9anime to your friends and do not forget to bookmark our
          site. <br />Thanks!
        </p>
      </div>
    </div>
  );
}
