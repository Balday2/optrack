import { RoleEnum } from "./lib/enums/role_enum"


export const AUTH_ROUTES = [
  "/login"
]


export const NOT_FOUND = "/404"
export const BASIC_PATH = "/"
export const ADMIN_PATH = "dashboard"
export const COORDINATOR_PATH = "coordinator"

export const ROLE_PATH_MAP = {
  [`/${ADMIN_PATH}`]: [RoleEnum.ADMIN],
  [`/${COORDINATOR_PATH}`]: [RoleEnum.COORDINATOR],
};

export const FIND_ROLE_PATH = (role: RoleEnum) => {
  switch (role) {
    case RoleEnum.ADMIN:
      return `${BASIC_PATH}${ADMIN_PATH}`
    case RoleEnum.COORDINATOR:
      return `${BASIC_PATH}${COORDINATOR_PATH}`
    default:
      return NOT_FOUND
  }
}

export type SideBarItem = {
  name: string;
  path: string;
  icon?: any;
  color: string;
  counter?: number;
};

export type SideBarProps = {
  title?: string;
  items: SideBarItem[];
};

export const SIDEBAR_PATHS = {
  dashboard: `${BASIC_PATH}${ADMIN_PATH}`,
  coordinator: `${BASIC_PATH}${ADMIN_PATH}/coordinators`,
  centre: `${BASIC_PATH}${ADMIN_PATH}/centres`,
  operation: `${BASIC_PATH}${ADMIN_PATH}/operations`,
}
