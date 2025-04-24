import React, { useState } from "react";
import { FaFileAlt, FaSave, FaCut, FaPaste, FaCopy } from "react-icons/fa";
import "./home.css";
import { RiTwitterXFill } from "react-icons/ri";

const randomHash = () =>
  "Qm" +
  Math.random().toString(36).substring(2, 10) +
  Math.random().toString(36).substring(2, 6);

const getRandomID = () => Math.floor(Math.random() * 900 + 100);

export const App = () => {
  const [deploying, setDeploying] = useState(false);
  const [metadata, setMetadata] = useState(null);

  const handleDeploy = () => {
    setDeploying(true);

    setTimeout(() => {
      const hash = randomHash();
      const tokenId = getRandomID();

      setMetadata({
        name: `LoveLetter #${tokenId}`,
        symbol: "TXT",
        description: "My heart on the blockchain...",
        txtContentHash: hash,
        createdBy: "0x" + Math.random().toString(16).substring(2, 10),
        createdAt: new Date().toISOString(),
        link: `https://ipfs.io/ipfs/${hash}`,
      });

      setDeploying(false);
    }, 1800);
  };

  return (
    <div className="app-wrapper">
      <h1 className="main-title">Solana TXT Token</h1>
      <div className="txt-app">
        <div className="window-header">
          <span>sol.txt</span>
          <span className="window-controls">
            <span>_</span> <span>☐</span> <span>×</span>
          </span>
        </div>

        <div className="menu-bar">
          <span>File</span>
          <span>Edit</span>
          <span>Deploy</span>
          <span>Help</span>
        </div>

        <div className="icon-toolbar">
          <button>
            <FaFileAlt />
          </button>
          <button>
            <FaSave />
          </button>
          <button>
            <FaCut />
          </button>
          <button>
            <FaCopy />
          </button>
          <button>
            <FaPaste />
          </button>
        </div>

        <div className="editor-area">
          <textarea placeholder="Manifesto, love letter, poem, rap lyrics...\n\nWrite it, deploy it, etch it onto the blockchain..." />
        </div>

        <button
          className="deploy-btn"
          onClick={handleDeploy}
          disabled={deploying}
        >
          {deploying ? "Deploying..." : "Deploy to Solana"}
        </button>

        {metadata && (
          <div className="metadata-block">
            <div className="metadata-header">
              <strong>Token Metadata</strong>
              <a href={metadata.link} target="_blank" rel="noopener noreferrer">
                View on IPFS
              </a>
            </div>
            <pre>{`"name": "${metadata.name}",  ipfs://${metadata.txtContentHash}
"symbol": "${metadata.symbol}",
"description": "${metadata.description}",
"txtContentHash": ${metadata.txtContentHash},
"createdBy": ${metadata.createdBy},
"createdAt": ${metadata.createdAt}`}</pre>
          </div>
        )}

        <div className="status-bar">
          {deploying ? "writing to chain..." : "135 m"}
        </div>
      </div>

      <section className="extra-section">
        <h2>About TXT Token</h2>
        <p>
          Solana TXT Token is a poetic experiment in blockchain and memory.
          Every token is a story, an artifact, a fingerprint.
        </p>
        <pre className="code-style">{`> Writing from mind to chain
> TXT deployed as hash
> Immutable. Eternal. Yours.`}</pre>
      </section>

      <section className="extra-section">
        <h2>Examples</h2>
        <p>Here are some sample token narratives recently deployed:</p>
        <pre className="code-style">{`"name": "Midnight Monologue #271"
"txtContentHash": "Qm8u3L9s7..."
"description": "Thoughts I couldn’t sleep without sending."
"createdBy": "0x4a2c91b9"`}</pre>
        <pre className="code-style">{`"name": "Chain Diary Entry"
"txtContentHash": "Qm38xvF1c..."
"description": "Tales from my day — one block at a time."
"createdBy": "0x53f09ac1"`}</pre>
      </section>

      <section className="extra-section">
        <h2>How it works</h2>
        <p>
          TXT Token is a simple interface for deploying text-based tokens on
          Solana. It uses IPFS for storage and the Solana blockchain for
          immutability.
        </p>
        <p>
          Write your text, click deploy, and watch it become part of the
          blockchain forever.
        </p>
        <p>
          The text is stored on IPFS, and the hash is saved on the Solana
          blockchain. This ensures that your text is both permanent and easily
          accessible.
        </p>
        <pre className="code-style">
          {`> Write your text
> Click deploy
> Watch it become part of the blockchain forever
> The text is stored on IPFS
> The hash is saved on the Solana blockchain
> Ensures that your text is both permanent and easily accessible`}
        </pre>
      </section>

      <section className="extra-section">
        <h2>License</h2>
        <p>
          This project is licensed under the MIT License. Feel free to use it,
          modify it, and share it with others.
        </p>
        <p>© 2023 TXT Token</p>
        <div className="links">
          <p className="target">
            <a href="" target="_blank" rel="noopener noreferrer">
              Contact Us <RiTwitterXFill />
            </a>
          </p>
          <p className="target">
            <a href="" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
