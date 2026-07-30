/**
 * Maps skill `icon` ids to static SVGs in `public/icons/skills/`.
 * Files are committed locally — no runtime CDN requests.
 */
const ICON_BASE = "/icons/skills";

export const skillIconPaths: Record<string, string> = {
  // Original icons
  javascript: `${ICON_BASE}/javascript.svg`,
  typescript: `${ICON_BASE}/typescript.svg`,
  go: `${ICON_BASE}/go.svg`,
  python: `${ICON_BASE}/python.svg`,
  nodejs: `${ICON_BASE}/nodedotjs.svg`,
  koa: `${ICON_BASE}/koa.svg`,
  express: `${ICON_BASE}/express.svg`,
  grpc: `${ICON_BASE}/grpc.svg`,
  kafka: `${ICON_BASE}/apachekafka.svg`,
  mongodb: `${ICON_BASE}/mongodb.svg`,
  postgresql: `${ICON_BASE}/postgresql.svg`,
  clickhouse: `${ICON_BASE}/clickhouse.svg`,
  redis: `${ICON_BASE}/redis.svg`,
  gcp: `${ICON_BASE}/googlecloud.svg`,
  aws: `${ICON_BASE}/aws.svg`,
  docker: `${ICON_BASE}/docker.svg`,
  jenkins: `${ICON_BASE}/jenkins.svg`,
  linux: `${ICON_BASE}/linux.svg`,
  react: `${ICON_BASE}/react.svg`,
  nextjs: `${ICON_BASE}/nextdotjs.svg`,
  rest: `${ICON_BASE}/openapiinitiative.svg`,
  microservices: `${ICON_BASE}/microservices.svg`,
  // New icons for Amit's stack
  wordpress: `${ICON_BASE}/wordpress.svg`,
  woocommerce: `${ICON_BASE}/woocommerce.svg`,
  gravityforms: `${ICON_BASE}/gravityforms.svg`,
  pods: `${ICON_BASE}/pods.svg`,
  html5: `${ICON_BASE}/html5.svg`,
  css3: `${ICON_BASE}/css3.svg`,
  figma: `${ICON_BASE}/figma.svg`,
  php: `${ICON_BASE}/php.svg`,
  git: `${ICON_BASE}/git.svg`,
  mysql: `${ICON_BASE}/mysql.svg`,
  webscraping: `${ICON_BASE}/webscraping.svg`,
  zapier: `${ICON_BASE}/zapier.svg`,
};

/** Dark or near-black logos — inverted in dark mode, brand colors on light */
export const skillIconsInvertOnDark = new Set([
  "express",
  "nextjs",
  "kafka",
  "koa",
  "wordpress",
  "git",
  "gravityforms",
  "pods",
  "webscraping",
]);

export function getSkillIconPath(icon: string): string | undefined {
  return skillIconPaths[icon];
}

export function skillIconInvertsOnDark(icon: string): boolean {
  return skillIconsInvertOnDark.has(icon);
}
