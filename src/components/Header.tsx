import Link from "next/link"
import Image from "next/image"
import Auth from "./Auth"
import styles from "../styles/Header.module.css"

const navLinks = [
  { href: "/", label: "核心技术" },
  {
    label: "开发者",
    submenu: [
      { href: "/docs", label: "开发文档" },
      { href: "/tutorials", label: "教程" },
      { href: "/api", label: "API" },
    ],
  },
  {
    label: "社区",
    submenu: [
      { href: "/events", label: "社区活动" },
      { href: "/blogs", label: "博客" },
      { href: "/posts", label: "社区帖子" },
    ],
  },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/favicon.png" alt="Nexus Logo" width={32} height={32} />
          <span>NEXUS 中文社区</span>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={link.submenu ? styles.hasSubmenu : undefined}
              >
                {link.submenu ? (
                  // 不带 href 的按钮或 span，触发下拉（这里先用 span）
                  <span className={styles.navLink} tabIndex={0} role="button" aria-haspopup="true" aria-expanded="false">
                    {link.label}
                  </span>
                ) : (
                  <Link href={link.href!} className={styles.navLink}>
                    {link.label}
                  </Link>
                )}
                {link.submenu && (
                  <ul className={styles.submenu}>
                    {link.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} className={styles.navLink}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Auth />
        </nav>
      </div>
    </header>
  )
}
