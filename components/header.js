import React from "react";
import Link from "next/link";

import { IconBrandBehance, IconBrandGithub } from "@tabler/icons";

const Header = () => {
  return (
    <div>
      <header className="general">
        <div>
          <h1>
            <Link href="/">
              <a>João Couto</a>
            </Link>
          </h1>

          <ul>
            <li>
              <Link href="https://www.behance.net/joaohouto">
                <a>
                  <IconBrandBehance size={25} color="#999" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/joaohouto">
                <a>
                  <IconBrandGithub size={25} color="#999" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
