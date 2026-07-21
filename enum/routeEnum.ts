/**************
 * 路由相关枚举 *
 **************/
import type { RouteUrlEnum } from '@/util/routeUtil.ts'

// 路由 url 白名单枚举
export const RouteWhiteUrlEnum: RouteUrlEnum[] = [
  PageUrlConst.PAGES_LAUNCH_INDEX_PAGE,
  PageUrlConst.PAGES_LOGIN_INDEX_PAGE,
  PageUrlConst.SUBPAGES_INDEX_PAGE,
  PageUrlConst.PAGES_HOME_INDEX_PAGE,
  PageUrlConst.PAGES_MY_INDEX_PAGE,
] as const
