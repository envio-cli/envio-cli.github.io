import React from "react";

const allDemos = ["img/envio-passphrase-final.gif", "img/envio-gpg-final.gif"];

export function Header() {
  const [currentDemo, setCurrentDemo] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo(allDemos[Math.floor(Math.random() * allDemos.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div align="center">
        <img
          src="/img/icon-color.svg"
          width="200px"
          style={{
            marginBottom: "-50px",
          }}
        />
        <h1
          style={{
            paddingBottom: "20px",
          }}
        >
          envio
        </h1>
      </div>

      <div align="center">
        <a href="https://github.com/envio-cli/envio" target="_blank">
          <img
            src="https://github.com/envio-cli/envio/actions/workflows/CICD.yml/badge.svg"
            alt="Created by humblepenguinn"
          />
        </a>
        &nbsp;
        <a href="https://crates.io/crates/envio" target="_blank">
          <img src="https://img.shields.io/crates/v/envio.svg" alt="crates" />
        </a>
        &nbsp;
        <a
          href="https://github.com/envio-cli/envio/blob/main/LICENSE-APACHE"
          target="_blank"
        >
          <img
            src="https://img.shields.io/github/license/envio-cli/envio"
            alt="License"
          />
        </a>
        &nbsp;
        <a
          href="https://github.com/envio-cli/envio/blob/main/LICENSE-MIT"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/License-MIT-red.svg"
            alt="License"
          />
        </a>
      </div>
      <br />
      <div
        align="center"
        style={{
          paddingBottom: "20px",
        }}
      >
        <h3>A Modern And Secure CLI Tool For Managing Environment Variables</h3>
      </div>

      <div
        align="center"
        style={{
          paddingBottom: "20px",
        }}
      >
        <img alt="Demo" src={currentDemo} width="800" />
      </div>
    </>
  );
}
