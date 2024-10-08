/* eslint-disable */
import '@/global.less';
import a from 'a';
import b from 'b';
import c from 'c';

console.log(a, b, c);
// 如果不需要在生命周期中操作, 可以将其删除然后重新运行
// 微应用被挂载
export async function mount(props: Record<string, unknown>) {
   
  console.log('mount', props);
}
// 微应用被卸载
export async function unmount(props: Record<string, unknown>) {
   
  console.log('unmount', props);
}
