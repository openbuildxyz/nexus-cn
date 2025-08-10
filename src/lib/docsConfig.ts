/**
 * 文档项接口定义
 * 表示单个文档页面的配置信息
 */
export interface DocItem {
  slug: string;        // 文档的唯一标识符，对应文件路径（不含扩展名）
  title: string;       // 文档显示标题
  hasArrow?: boolean;  // 是否显示外链箭头图标（可选）
}

/**
 * 文档分组接口定义
 * 用于将相关文档组织在一起，支持嵌套结构
 */
export interface DocGroup {
  id: string;                     // 分组的唯一标识符
  title: string;                  // 分组显示标题
  collapsed?: boolean;            // 是否默认折叠状态（可选）
  type: 'group';                  // 类型标识符，用于区分分组和文档项
  children: (DocItem | DocGroup)[]; // 子项数组，可以包含文档项或嵌套分组
}

/**
 * 文档分类接口定义
 * 顶级分类，用于组织整个文档结构
 */
export interface DocCategory {
  id: string;           // 分类的唯一标识符
  title: string;        // 分类显示标题
  collapsed?: boolean;  // 是否默认折叠状态（可选）
  docs?: DocItem[];     // 直属于该分类的文档列表（可选）
  groups?: DocGroup[];  // 该分类下的分组列表（可选）
}

/**
 * 文档分类配置数据
 * 定义了整个文档站点的结构和组织方式
 *
 * 配置说明：
 * - 每个分类可以包含直接的文档（docs）和分组（groups）
 * - 分组支持嵌套，可以创建多层级的文档结构
 * - collapsed 属性控制初始展开/折叠状态
 */
export const docsCategories: DocCategory[] = [
  {
    id: 'overview',
    title: '概述',
    collapsed: false,
    docs: [
        { slug: 'overview/overview', title: '概述' },
    ],
  },
];

/**
 * 获取所有文档分类配置
 * @returns 文档分类配置数组
 */
export function getDocsByCategory(): DocCategory[] {
  return docsCategories;
}

/**
 * 根据文档 slug 查找对应的分类和文档信息
 * 支持在所有分类和嵌套分组中递归搜索
 *
 * @param slug 文档的唯一标识符
 * @returns 包含分类和文档信息的对象，如果未找到则返回 null
 */
export function findDocCategory(
  slug: string
): { category: DocCategory; doc: DocItem } | null {
  for (const category of docsCategories) {
    // 首先搜索分类下直接的文档
    if (category.docs) {
      const doc = category.docs.find((d) => d.slug === slug);
      if (doc) {
        return { category, doc };
      }
    }

    // 然后递归搜索分类下的分组中的文档
    if (category.groups) {
      const result = searchInGroups(category.groups, slug);
      if (result) {
        return { category, doc: result };
      }
    }
  }
  return null;
}

/**
 * 在分组中递归搜索指定 slug 的文档
 * 支持多层嵌套的分组结构
 *
 * @param groups 要搜索的分组数组
 * @param slug 要查找的文档 slug
 * @returns 找到的文档项，如果未找到则返回 null
 */
function searchInGroups(groups: DocGroup[], slug: string): DocItem | null {
  for (const group of groups) {
    for (const child of group.children) {
      // 如果子项是文档项且 slug 匹配
      if ('slug' in child && child.slug === slug) {
        return child;
      }
      // 如果子项是嵌套分组，递归搜索
      if ('type' in child && child.type === 'group') {
        const result = searchInGroups([child], slug);
        if (result) return result;
      }
    }
  }
  return null;
}
