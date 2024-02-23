export const myStore = defineStore("myStore", () => {
  const sayHello = (name: string) => `Hello ${name}`;

  return { sayHello };
});
