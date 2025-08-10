import Link from "next/link"
import Image from "next/image"
import { Button } from "antd"
import { Github } from "lucide-react"
import { SiDiscord } from "react-icons/si"
import styles from "../styles/Footer.module.css"

const socialIcons = [
  { href: "https://github.com/nexus-xyz", icon: <Github size={18} />, label: "GitHub" },
  { href: "https://discord.gg/uQm7tuEE", icon: <SiDiscord size={18} />, label: "Discord" },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerInfo}>
          <Link href="/" className={styles.logo}>
            <Image src="/favicon.png" alt="Nexus Logo" width={32} height={32} />
            <span>NEXUS</span>
          </Link>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Nexus. 保留所有权利。中文社区内容仅供参考。
          </p>
        </div>
        <div className={styles.footerSocials}>
          {socialIcons.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={styles.socialLinkItemAntd}
            >
              <Button type="text" icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
