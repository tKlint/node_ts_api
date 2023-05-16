/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-16 22:31:27
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-05-16 23:37:15
 * @FilePath: \node_ts_api\services\type.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Key = string | number | symbol
interface Params {
  [k: Key] : string | number

}
export declare namespace AdminServiceType {
  interface AddAdminParams extends Params {
    loginId: string;
    loginPwd: string;
    sex: number;
  }
}