import * as React from 'react'

import style from "./Footer.module.css"

interface Props {

}

function Footer () {
  return (
    <footer className={style.footer}>
      <p>
        <span>React + TS Todo</span> @ 2023
      </p>
    </footer>
  );
}

export default Footer