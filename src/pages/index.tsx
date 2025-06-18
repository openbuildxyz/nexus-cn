import Image from "next/image"
import Link from "next/link"
import styles from "./index.module.css"

import { Button } from "antd"

import {
  ArrowUpRight,
  Menu,
  Github,
  MessageSquare,
  Users,
  Code2,
  BookOpen,
  FileText,
  PenToolIcon as Tool,
} from "lucide-react"

// --- Constants & Data ---
const navLinks = [
  { href: "#technology", label: "核心技术" },
  { href: "#developers", label: "开发者" },
  { href: "#community", label: "社区中心" },
]

const socialIcons = [
  { href: "https://github.com/Nexusoft", icon: <Github size={18} />, label: "GitHub" },
  { href: "https://discord.gg/Sales3D2tW", icon: <MessageSquare size={18} />, label: "Discord" },
]


const NexusLogo = () => (
  <Link href="/" className={styles.logo}>
    <Image src="/favicon.png" alt="Nexus Logo" width={32} height={32} />
    <span>NEXUS</span>
  </Link>
)

const SmallNexusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.smallSectionIcon}
  >
    <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
    <path d="M2 17L12 22L22 17"></path>
    <path d="M2 12L12 17L22 12"></path>
  </svg>
)

// --- Page Sections defined directly in page.tsx ---

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={`${styles.container} ${styles.headerInner}`}>
      <NexusLogo />
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.socialLinksHeader}>
          {socialIcons.map((social) => (
            <Link
              href={social.href}
              key={social.label}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLinkItem}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </nav>
      {/* TODO: Implement mobile menu functionality, possibly with Ant Design Drawer */}
      <Button type="text" icon={<Menu size={22} />} className={styles.mobileMenuButtonAntd} aria-label="打开菜单" />
    </div>
  </header>
)

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={`${styles.container} ${styles.heroContent}`}>
      <h1 className={styles.heroHeadline}>
        Nexus <span className={styles.heroHeadlineCommunity}>中文社区</span>
        <br />为 AI 时代构建的 Layer 1
      </h1>
      <p className={styles.heroSubheadline}>
        在人工智能、区块链和零知识证明的交汇点上创新，与全球及华语社区共同探索未来。
      </p>
      <div className={styles.heroActions}>
        <Button href="#community" className={styles.heroButton} ghost icon={<ArrowUpRight size={16} />}>
          加入社区
        </Button>
        <Button href="#technology" className={styles.heroButton} ghost icon={<ArrowUpRight size={16} />}>
          了解技术
        </Button>
      </div>
    </div>
  </section>
)

const TechnologyHighlightsSection = () => {
  const zkvmFeatures = [
    "兼容任何编程语言 (Rust, C++, Go 等)",
    "模拟 RISC-V 处理器",
    "更易用、更可扩展、速度提升1000倍以上",
    "基于开放科学原则开发",
  ]

  return (
    <section id="technology" className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.technologySubSection}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionCategory}>NEXUS LAYER 1</span>
            <SmallNexusIcon />
          </div>
          <div className={styles.techContentGrid}>
            <div className={styles.techTextContent}>
              <h2 className={styles.sectionHeadline}>世界超级计算机</h2>
              <p className={styles.sectionDescription}>
                新时代的技术需要全新的基础设施方法。Nexus L1 将世界的算力集中到单一、超高性能、与EVM兼容的区块链中。
              </p>
              <div className={styles.sectionActions}>
                <Button href="#" className={styles.sectionButton} ghost icon={<ArrowUpRight size={14} />}>
                  探索 Layer 1
                </Button>
                <Button href="#" className={styles.sectionButton} ghost icon={<ArrowUpRight size={14} />}>
                  L1 技术文档
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.technologySubSection} ${styles.zkvmSection}`}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionCategory}>NEXUS ZKVM</span>
            <SmallNexusIcon />
          </div>
          <div className={styles.techContentGrid}>
            <div className={styles.techTextContent}>
              <h2 className={styles.sectionHeadline}>可验证机器</h2>
              <p className={styles.sectionDescription}>
                作为通用虚拟机，Nexus zkVM 3.0 驱动着我们的世界超级计算机，并使可验证计算成为现实。
              </p>
              <div className={styles.sectionActions}>
                <Button href="#" className={styles.sectionButton} ghost icon={<ArrowUpRight size={14} />}>
                  了解 Nexus zkVM
                </Button>
                <Button
                  href="https://github.com/Nexusoft/Nexus_zkVM"
                  target="_blank"
                  className={styles.sectionButton}
                  ghost
                  icon={<ArrowUpRight size={14} />}
                >
                  GitHub
                </Button>
                <Button href="#" className={styles.sectionButton} ghost icon={<ArrowUpRight size={14} />}>
                  zkVM 3.0 规范
                </Button>
              </div>
            </div>
            <div className={styles.techVisualContent}>
              <Image
                src="/zkvm-stack-visual.png" // This image is kept in public folder
                alt="Nexus zkVM Stack"
                width={350}
                height={350}
                objectFit="contain"
                className={styles.techImageZkVM}
              />
            </div>
            <ul className={styles.zkvmFeaturesList}>
              {zkvmFeatures.map((feature, index) => (
                <li key={index} className={styles.zkvmFeatureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const DeveloperPortalSection = () => {
  const devResources = [
    {
      icon: <FileText size={28} />,
      title: "技术文档",
      description: "获取全面的指南、架构说明和 API 参考，深入了解 Nexus 技术栈。",
      linkText: "阅读文档",
      linkHref: "#", // TODO: Replace with actual link
    },
    {
      icon: <Tool size={28} />,
      title: "SDK 与工具",
      description: "使用我们强大的软件开发工具包和命令行工具，加速您的开发进程。",
      linkText: "查看工具",
      linkHref: "#", // TODO: Replace with actual link
    },
    {
      icon: <Github size={28} />,
      title: "代码库与示例",
      description: "访问 Nexus 在 GitHub 上的开源代码库，查找入门项目和最佳实践范例。",
      linkText: "访问 GitHub",
      linkHref: "https://github.com/Nexusoft",
    },
    {
      icon: <Code2 size={28} />,
      title: "开发者论坛",
      description: "加入开发者专属论坛和 Discord 频道，与其他构建者交流，获取技术支持。",
      linkText: "加入讨论",
      linkHref: "#", // TODO: Replace with actual link
    },
  ]

  return (
    <section id="developers" className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.sectionMetaCentered}>
          <span className={styles.sectionCategory}>为开发者而生</span>
          <SmallNexusIcon />
        </div>
        <h2 className={`${styles.sectionHeadline} ${styles.textCenter}`}>构建下一代去中心化应用</h2>
        <p className={`${styles.sectionDescription} ${styles.textCenter} ${styles.maxWidthLarge}`}>
          我们提供您在 Nexus 平台上构建、测试和部署创新应用所需的一切工具、文档和社区支持。
        </p>
        <div className={styles.developerGrid}>
          {devResources.map((resource) => (
            <div key={resource.title} className={styles.developerCard}>
              <div className={styles.developerCardIcon}>{resource.icon}</div>
              <h3 className={styles.developerCardTitle}>{resource.title}</h3>
              <p className={styles.developerCardDescription}>{resource.description}</p>
              <Button
                type="link"
                href={resource.linkHref}
                target={resource.linkHref.startsWith("http") ? "_blank" : "_self"}
                className={styles.developerCardLinkAntd}
                icon={<ArrowUpRight size={14} />}
              >
                {resource.linkText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CommunityEngagementSection = () => {
  const communityHighlights = [
    {
      icon: <Users size={24} />,
      title: "交流与讨论",
      description: "加入官方论坛、Discord 及微信群，与全球及本地成员分享见解，讨论 Nexus 的未来。",
    },
    {
      icon: <Code2 size={24} />,
      title: "技术分享与协作",
      description: "参与中文社区组织的技术研讨会、代码贡献活动，共同提升技能，推动项目发展。",
    },
    {
      icon: <BookOpen size={24} />,
      title: "学习与资源",
      description: "获取最新的 Nexus 技术文档中文翻译、教程和社区整理的学习资料。",
    },
  ]

  return (
    <section id="community" className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.sectionMetaCentered}>
          <span className={styles.sectionCategory}>NEXUS 中文社区</span>
          <SmallNexusIcon />
        </div>
        <h2 className={`${styles.sectionHeadline} ${styles.textCenter}`}>汇聚力量，共筑未来</h2>
        <p className={`${styles.sectionDescription} ${styles.textCenter} ${styles.maxWidthLarge}`}>
          Nexus
          中文社区是连接华语世界开发者、用户和爱好者的重要桥梁。我们致力于提供一个开放、包容的环境，促进知识共享、技术交流和项目协作。
        </p>
        <div className={styles.communityGrid}>
          {communityHighlights.map((item) => (
            <div key={item.title} className={styles.communityCard}>
              <div className={styles.communityCardIcon}>{item.icon}</div>
              <h3 className={styles.communityCardTitle}>{item.title}</h3>
              <p className={styles.communityCardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.sectionActions} ${styles.justifyCenter} ${styles.marginTopLarge}`}>
          <Button
            href="https://discord.gg/Sales3D2tW"
            target="_blank"
            className={styles.sectionButton}
            ghost
            icon={<ArrowUpRight size={14} />}
          >
            加入 Discord
          </Button>
          <Button href="#" className={styles.sectionButton} ghost icon={<ArrowUpRight size={14} />}>
            访问中文论坛
          </Button>
        </div>
      </div>
    </section>
  )
}

const SiteFooter = () => (
  <footer className={styles.footer}>
    <div className={`${styles.container} ${styles.footerInner}`}>
      <div className={styles.footerInfo}>
        <NexusLogo />
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Nexus. 保留所有权利。中文社区内容仅供参考。
        </p>
      </div>
      <div className={styles.footerSocials}>
        {socialIcons.map((social) => (
          <Button
            type="text"
            href={social.href}
            key={social.label}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            icon={social.icon}
            className={styles.socialLinkItemAntd}
          />
        ))}
      </div>
    </div>
  </footer>
)

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.mainContent}>
        <HeroSection />
        <TechnologyHighlightsSection />
        <DeveloperPortalSection />
        <CommunityEngagementSection />
      </main>
      <SiteFooter />
    </div>
  )
}

