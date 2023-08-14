import Service from "@/utils/axios";

/**
 * 查询用户是否超管
 */
export const netIsAdmin = async (): Promise<boolean> =>
  await Service.get('/system/mgr/isAdmin');
