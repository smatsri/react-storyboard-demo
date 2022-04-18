export const ignore = () => { }

export const uuid = () => Math.floor(Math.random() * 1000).toString();

export const log = (...args: any[]) => console.log(...args);

export const delay = (duration = 1000) => new Promise<any>((res) => {
  setTimeout(() => {
    res({})
  }, duration);
})