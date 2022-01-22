import React from "react";
import Link from "next/link";

import { IconBrackets } from "@tabler/icons";

const Header = () => {
  return (
    <div>
      <header className="general">
        <div>
          <h1>
            <Link href="/blog">
              <a>João Couto</a>
            </Link>
          </h1>

          <IconBrackets size={20} color="#999" />
        </div>
      </header>
    </div>
  );
};

export default Header;
